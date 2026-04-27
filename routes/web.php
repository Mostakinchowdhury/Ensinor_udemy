<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Welcome');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/instructor', function () {
    return Inertia::render('Instructor');
});

Route::get("/courses", function () {
    return Inertia::render("Courses");
})->name("courses");


// single course

Route::get("/courses/{id}", function ($id) {
    return Inertia::render("detail/Coursedt", ["id" => $id]);
});
