<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::middleware("guest")->group(function () {
   
      Route::get("/login", [AuthController::class, 'login'])->name("login");
      Route::post("/login", [AuthController::class, 'attemptlogin'])->name("attemptlogin");

     Route::get("/signup", [AuthController::class, 'signup'])->name("signup");
    Route::post("/signup", [AuthController::class, 'attemptsignup'])->name("attemptsignup");
    Route::get("/forget", [AuthController::class, 'forget'])->name("forget");
    Route::post("/forget", [AuthController::class, 'attemptforget'])->name("attemptforget");

    Route::get("/otp",[AuthController::class, 'otp'])->name("otp");
    Route::post("/otp",[AuthController::class, 'attemptotp'])->name("attemptotp");
    Route::post("/resendotp",[AuthController::class, 'resendotp'])->name("resendotp"); 
    Route::get("/reset-password",[AuthController::class, 'resetpassword'])->name("resetpassword");
    Route::post("/reset-password",[AuthController::class, 'attemptresetpassword'])->name("attemptresetpassword");
    
});



Route::middleware("auth")->group(function () {
    Route::post("/logout", [AuthController::class, 'logout'])->name("logout");
   
});







