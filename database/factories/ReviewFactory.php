<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory

{
     protected $model = Review::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
   public function definition(): array
{
    return [
        'course_id' => $this->faker->numberBetween(1,100),
        'user_id'   => \App\Models\User::factory(),   // auto user create

        'rating' => $this->faker->numberBetween(1, 5),

        'review_msg' => $this->faker->paragraph(),

        'created_at' => now(),
        'updated_at' => now(),
    ];
}
}
