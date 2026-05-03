<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)

    // category: params.get('category') ?? 'allcourses',
    //     bundle_type: params.get('bundle_type') ?? 'Single',
    //     price_level: params.get('price_level') ?? 'Paid',
    //     language: params.get('language') ?? 'English',
    //     search: params.get('search') ?? '',
    //     sorting: params.get('sorting') ?? 'Latest',
    //     skilllevel: params.get('skilllevel') ?? 'All levels',
    {    
        $sortColumn = match ($request->sorting) {
        'Most Viewed' => 'views',
        'Most popular' => 'total_student',
        'Top rated' => 'average_rating',
        'Latest' => 'id',
        default => '-id',
      };
      $direction = str_starts_with($sortColumn, '-') ? 'ASC' : 'DESC';
      $column = ltrim($sortColumn, '-');
      $allowed = ['views', 'total_student', 'average_rating', 'id'];

    if (!in_array($column, $allowed)) {
    $column = 'id';
     }
      $courses = Course::query()
    ->select('*')->withCount(['reviews as total_rating', 'users as total_student'])
    ->withAvg('reviews as average_rating', 'rating')

     ->when($request->search, function ($q) use ($request) {
        $q->where(function ($sub) use ($request) {
            $sub->where("title", "like", "%{$request->search}%")
                ->orWhere("description", "like", "%{$request->search}%")
                ->orWhere("summary", "like", "%{$request->search}%");
        });
    })

    ->when($request->category && $request->category != "allcourses", function ($q) use ($request) {
        $q->whereHas('category', function ($query) use ($request) {
            $query->where('name', $request->category);
        });
    })

    ->when($request->bundle_type, fn($q, $bt) => $q->where("bundle_type", $bt))
    ->when($request->price_level === "Paid", fn($q) => $q->where("price", ">", 0))
    ->when($request->price_level === "Free", fn($q) => $q->where("price", 0))
    ->when($request->language, fn($q, $v) => $q->where("language", $v))
    ->when($request->skilllevel && $request->skilllevel != "All levels",
        fn($q) => $q->where("course_type", $request->skilllevel)
    )
    ->orderBy($column, $direction)
    ->paginate(20);
    
    // ->map(function ($c) {
    //     $c->average_rating = round($c->average_rating, 1);
    //     return $c;
    // });

        $categories = Category::withCount('courses')->get()->map(function ($cat) {
       return [
        'name' => $cat->name,
        'total_courses' => $cat->courses_count,
        ];
        });
        $cl = Course::count();
        $languages = Course::distinct()->pluck('language');
        // dd($courses->toArray(),$languages->toArray(),$categories->toArray());
        return Inertia::render("Courses",compact("courses","categories","languages","cl"));
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    

    /**
     * Display the specified resource.
     */

    public function show(string $id)
    {
       $course = Course::with([
    'lessons',
    'curriculums',
    'reviews.user',
    'reviews.replay_of_reviews.user',
    'tags'
      ])->findOrFail($id);
       $course->increment('viewd');
       
       return Inertia::render("detail/Coursedt",["course"=>$course]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
