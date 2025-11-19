<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageTranslation extends Model
{
    /** @use HasFactory<\Database\Factories\PageTranslationsFactory> */
    use HasFactory;
    protected $fillable = [
        'page_id',
        'locale',
        'title',
        'slug',
        'content',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
