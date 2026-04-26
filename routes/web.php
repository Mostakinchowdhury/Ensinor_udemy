<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
<<<<<<< HEAD
use Laravel\Fortify\Features;
=======
>>>>>>> main

Route::inertia('/', 'Welcome');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

<<<<<<< HEAD
Route::get('/pricing', function () {
    return Inertia::render('PricingInstructor');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
=======
Route::get("/courses", function () {
    return Inertia::render("Courses");
})->name("courses");


// single course

Route::get("/courses/{id}",function($id){
    return Inertia::render("detail/Coursedt",["id"=>$id]);
});
>>>>>>> main
