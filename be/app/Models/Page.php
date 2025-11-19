<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\PageTranslation;

class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PagesFactory> */
    use HasFactory;
    protected $fillable = [
        'key',
        'is_active',
    ];

    public function translations(): HasMany
    {
        return $this->hasMany(PageTranslation::class);
    }

    public function translation(?string $locale = null)
    {
        $locale = $locale ?? app()->getLocale();

        return $this->translations
            ->where('locale', $locale)
            ->first()
            ?? $this->translations->first(); // fallback
    }
}
