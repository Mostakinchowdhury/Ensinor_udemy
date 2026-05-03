<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Course>
 */
class CourseFactory extends Factory
{
    protected $model = Course::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'title' => $this->faker->sentence(3),
        "Category_id"=>$this->faker->numberBetween(1,10),
        'summary' => $this->faker->text(200),

        'description' => $this->faker->paragraphs(3, true),

        'conclusion' => $this->faker->paragraph(),

        'lectures' => $this->faker->numberBetween(5, 50),

        'duration' => $this->faker->numberBetween(60, 1000), // minutes

        'course_type' => $this->faker->randomElement([
            "All levels",
            'Beginner',
            'Intermediate',
            'Advanced'
        ]),
        "bundle_type"=>$this->faker->randomElement([
            'Single',
            "Bundle"
        ]),

        'language' => $this->faker->randomElement([
            'Bangla',
            'English'
        ]),

        'deadline' => $this->faker->dateTimeBetween('+1 month', '+1 year'),

        'published_at' => $this->faker->dateTimeBetween('-6 months', 'now'),

        'certificate' => $this->faker->boolean(),

        'price' => $this->faker->randomFloat(2, 0, 5000),

        'created_at' => now(),
        'updated_at' => now(),
    ];
}
}
