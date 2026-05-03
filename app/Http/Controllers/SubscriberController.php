<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriberController extends Controller
{
    //
    public function store(Request $request){
        $request->validate([
            "email"=>"required|email|unique:subscribers,email"
        ]);
        Subscriber::create([
            "email"=>$request->email
        ]);
        return Inertia::flash("success","You have successfully subscribed to our platform.")->back();
    }
}
