<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Work;

class Crew extends Model
{
    use HasFactory;

    protected $table = 'crews';

    protected $fillable = [
        'first_name',
        'last_name',
    ];

    protected $appends = [
        'full_name',
    ];

    public function work() : BelongsTo
    {
        return $this->belongsTo(Work::class);
    }

    public function getFullNameAttribute()
    {
        return $this->first_name . " " . $this->last_name;
    }
}
