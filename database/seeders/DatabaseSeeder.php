<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use App\Models\Curriculum;
use App\Models\Lesson;
use App\Models\Replay_of_review;
use App\Models\Review;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // Category::factory()->count(10)->create();
        // Course::factory()->count(100)->create();
        // Review::factory()->count(1000)->create();
        // Replay_of_review::factory()->count(2000)->create();
        // Lesson::factory()->count(1200)->create();
        // Curriculum::factory()->count(1200)->create();
        // Course::find(1)->users()->attach([1,3,5]);
        Course::find(1)->tags()->attach([1,3,5]);
    }
}
