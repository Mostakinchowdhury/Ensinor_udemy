<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SubscriberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// home page
Route::get('/', [HomeController::class, 'index'])->name('home');


// about page

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


// test route

Route::get("/test",function(){
   return inertia("Test",["id"=>25]);
});

// subscribers

Route::post("subscribe",[SubscriberController::class,"store"]);


// courses list page

Route::get("/courses",[CourseController::class,"index"])->name("courses.index");


Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/business', function () {
    return Inertia::render('Business');
});

Route::get('/instructors', function () {
    return Inertia::render('Instructors');
});
// Route::get('/instructor/{id}', function ($id) {
//     return Inertia::render('InstructorDetail', ["id" => $id]);
// });

// ekhn direct route banano hoise /InstructorDetail. pore id anujayi korte hbe
Route::get('/instructordetail', function () {
    return Inertia::render('InstructorDetail');
});