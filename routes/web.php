<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::inertia('/', 'Welcome');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
