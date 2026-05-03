<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Lesson>
 */
class LessonFactory extends Factory
{
    protected $model = Lesson::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'course_id' => $this->faker->numberBetween(1,100),

        'lesson' => $this->faker->sentence(4), // lesson title

        'created_at' => now(),
        'updated_at' => now(),
    ];
}
}
