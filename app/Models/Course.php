<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    //
    
    use HasFactory;

    public function reviews():HasMany{
        return $this->hasMany(Review::class);
    }
    public function category():BelongsTo{
        return $this->belongsTo(Category::class);
    }

    public function users():BelongsToMany{
        return $this->belongsToMany(User::class);
    }
    public function lessons():HasMany{
        return $this->hasMany(Lesson::class);
    }
    public function curriculums():HasMany{
        return $this->hasMany(Curriculum::class);
    }
    public function tags():BelongsToMany{
        return $this->belongsToMany(Tag::class);
    }
    
   
    protected function totalRating(): Attribute
    {
    return Attribute::make(
        get: function () {
            return $this->reviews()->count() ?? 0;
        }
    );
    }

   

}
