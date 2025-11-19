<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\PostCategory;

class PostCategoryTranslation extends Model
{
    /** @use HasFactory<\Database\Factories\PostCategoryTranslationsFactory> */
    use HasFactory;

    protected $fillable = [
        'post_category_id',
        'locale',
        'name',
        'slug',
        'description',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class, 'post_category_id');
    }
}
