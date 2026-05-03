<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request){
        $dt=$request->only(["rating","review_msg","course_id"]);
        $dt["user_id"]=1;
        Review::create($dt);
        
        return redirect("/courses/{$request->course_id}");
    }
}
