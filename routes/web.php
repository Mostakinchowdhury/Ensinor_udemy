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



Route::middleware("auth")->group(function () {


    // replay_of_reviw and review routes

     Route::post("replay_of_review",[Replay_of_review_controller::class,"store"]);
     Route::post("review",[ReviewController::class,"store"]);
    // course resource 

    Route::resource("courses",CourseController::class)->except(["index"]);
});



Route::middleware("guest")->group(function () {
   
});

// authentication routes
require __DIR__.'/auth.php';

// all publics routes where allow guest and user both
require __DIR__.'/pub.php';

