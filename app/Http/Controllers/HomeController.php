<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //Index method to show home page with courses and categories
    public function index(Request $request){
    $pcourses=Course::query()->with('category')->when($request->category && $request->category != "all",function ($q) {
        $q->whereHas("category",function ($query) {
            $query->where("name",request()->category);
        });
    })->withCount(['reviews as total_rating', 'users as total_student'])
    ->withAvg('reviews as average_rating', 'rating')->orderBy("total_student","DESC")->take(4)->get();
    $tcourses=Course::query()->withCount(['reviews as total_rating', 'users as total_student'])
    ->withAvg('reviews as average_rating', 'rating')->orderBy("viewd","DESC")->take(4)->get(); 

    $categories= Category::distinct()->pluck("name");

    return Inertia::render('welcome',["courses"=>$pcourses,"categories"=>$categories,"top_courses"=>$tcourses]);

}
}
