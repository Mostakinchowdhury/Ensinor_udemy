<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\Replay_of_review_controller;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubscriberController;
use App\Models\Category;
use App\Models\Course;
use App\Models\Replay_of_review;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(Request $request){
    $pcourses=Course::query()->with('category')->when($request->category && $request->category != "all",function ($q) {
        $q->whereHas("category",function ($query) {
            $query->where("name",request()->category);
        });
    })->withCount(['reviews as total_rating', 'users as total_student'])
    ->withAvg('reviews as average_rating', 'rating')->orderBy("total_student","DESC")->take(4)->get();
    $tcourses=Course::query()->withCount(['reviews as total_rating', 'users as total_student'])
    ->withAvg('reviews as average_rating', 'rating')->orderBy("viewd","DESC")->take(4)->get(); 

    $categories= Category::distinct()->pluck("name");

    return Inertia::render('welcome',["courses"=>$pcourses,"categories"=>$categories,"top_courses"=>$tcourses]);

});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/instructor', function () {
    return Inertia::render('Instructor');
});
// Route::get('/instructor/{id}', function ($id) {
//     return Inertia::render('InstructorDetail', ["id" => $id]);
// });

// ekhn direct route banano hoise /InstructorDetail. pore id anujayi korte hbe
Route::get('/instructordetail', function () {
    return Inertia::render('InstructorDetail');
});




Route::resource("courses",CourseController::class);

// test route

Route::get("/test",function(){
   return inertia("Test",["id"=>25]);
});


// replay_of_reviw and review routes

Route::post("replay_of_review",[Replay_of_review_controller::class,"store"]);
Route::post("review",[ReviewController::class,"store"]);



// subscribers

Route::post("subscribe",[SubscriberController::class,"store"]);

