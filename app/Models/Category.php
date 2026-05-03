<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    //
    use HasFactory;
    protected $appends = ['total_courses',];

    public function courses():HasMany{
        return $this->hasMany(Course::class);
    }
    protected function totalCourses(): Attribute
    {
    return Attribute::make(
        get: function () {
            return $this->courses()->count() ?? 0;
        }
    );
    }
}
