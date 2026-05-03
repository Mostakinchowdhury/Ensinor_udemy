<?php

namespace Database\Factories;

use App\Models\Replay_of_review;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Replay_of_review>
 */
class Replay_of_reviewFactory extends Factory
{
    protected $model = Replay_of_review::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'review_id' => $this->faker->numberBetween(1,1000),
        'user_id'   => $this->faker->numberBetween(1,10),

        'replay_msg' => $this->faker->paragraph(),

        'created_at' => now(),
        'updated_at' => now(),
    ];
}
}
