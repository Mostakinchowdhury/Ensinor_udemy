<?php

namespace App\Http\Controllers;

use App\Models\Replay_of_review;
use Illuminate\Http\Request;

class Replay_of_review_controller extends Controller
{
    //
    public function store(Request $request){
       Replay_of_review::create([
        "replay_msg"=>$request->replay_msg,
        "user_id"=> 1,
        "review_id"=>$request->review_id
       ]);
       redirect("/courses/{$request->course_id}");
    } 
}
