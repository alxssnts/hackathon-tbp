<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Crew;
use App\Models\Route;

class Ship extends Model
{
    use HasFactory;

    protected $table = 'ships';

    protected $fillable = [
        'name',
    ];

    public function crews() : HasMany
    {
        return $this->hasMany(Crew::class);
    }

    public function route() : BelongsTo
    {
        return $this->belongsTo(Route::class);
    }
}
