<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class OtpAttempt extends Model
{
    //
    protected $fillable = [
        'token',
        'email', 
        'otp',
        'expires_at',
        'submitted_at',
    ];
    protected $casts = [
    'expires_at' => 'datetime',
    'submitted_at' => 'datetime',
     ];
     
    protected static function booted()
    {
    static::creating(function ($model) {
        if (empty($model->token)) {
        $token = Str::random(60);
         while (OtpAttempt::where('token', $token)->exists()) {
            $token = Str::random(60);
        }
        $model->token = $token;
    }
    }
    );
    }
    
}
