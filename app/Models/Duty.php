<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Work;

class Duty extends Model
{
    use HasFactory;

    protected $table = 'duties';

    protected $fillable = [
        'title',
        'description',
    ];

    public function work() : BelongsTo
    {
        return $this->belongsTo(Work::class);
    }
}
