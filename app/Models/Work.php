<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Crew;
use App\Models\Duty;

class Work extends Model
{
    use HasFactory;

    protected $table = 'works';

    protected $fillable = [
        'title',
        'description'
    ];

    public function crews() : HasMany
    {
        return $this->hasMany(Crew::class);
    }

    public function duties() : HasMany
    {
        return $this->hasMany(Duty::class);
    }
}
