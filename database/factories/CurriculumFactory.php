<?php

namespace Database\Factories;

use App\Models\Curriculum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Curriculum>
 */
class CurriculumFactory extends Factory
{
    protected $model = Curriculum::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'course_id' => $this->faker->numberBetween(1,100),

        'title' => $this->faker->sentence(3),

        'duration' => $this->faker->numberBetween(1, 50) . 'h ' . $this->faker->numberBetween(0, 59) . 'm',

        'url' => $this->faker->randomElement([
            "https://www.youtube.com/embed/MRUNjAm3deU?si=mpjLs0QElLj0eaVm",
            "https://www.youtube.com/embed/aqWcgm8ZDPc?si=u75H3fNz462YNHCr",
            "https://www.youtube.com/embed/VfxiCzdL6dY?si=8vkuotARya8uAMYT",
            "https://www.youtube.com/embed/zari70_ppQw?si=vzL4w9oVMfYca023",
            "https://www.youtube.com/embed/eP1EvHzbcNM?si=dxaZQzoDQme9WKWs"
        ]),

        'ispremium' => $this->faker->boolean(),

        'created_at' => now(),
        'updated_at' => now(),
    ];
}
}
