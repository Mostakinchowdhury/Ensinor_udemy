<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Review extends Model
{
    //
    use HasFactory;
    protected $fillable = ["rating","review_msg","user_id","course_id"];
    public function replay_of_reviews():HasMany{
        return $this->hasMany(Replay_of_review::class);
    }
    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }
}
