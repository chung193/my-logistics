<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\PostCategoryTranslation;

class PostCategory extends Model
{
    /** @use HasFactory<\Database\Factories\PostCategoriesFactory> */
    use HasFactory;
    protected $fillable = [
        'parent_id',
        'is_active',
        'sort_order',
    ];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(PostCategory::class, 'parent_id');
    }

    public function translations(): HasMany
    {
        return $this->hasMany(PostCategoryTranslation::class);
    }

    public function translation(?string $locale = null)
    {
        $locale = $locale ?? app()->getLocale();

        return $this->translations
            ->where('locale', $locale)
            ->first()
            ?? $this->translations->first();
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
