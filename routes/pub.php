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
