<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Replay_of_review extends Model
{
    //
    use HasFactory;
    protected $fillable = ["replay_msg","user_id","review_id"];
    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }
}
