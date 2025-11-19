<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\PostTranslation;

class PostController extends Controller
{
    //     {
    //   "key": "about-us",
    //   "is_active": true,
    //   "translations": [
    //     {
    //       "locale": "vi",
    //       "title": "Giới thiệu",
    //       "slug": "gioi-thieu",
    //       "content": "<p>Nội dung tiếng Việt</p>"
    //     },
    //     {
    //       "locale": "en",
    //       "title": "About us",
    //       "slug": "about-us",
    //       "content": "<p>English content</p>"
    //     }
    //   ]
    // }
    public function index()
    {
        $pages = Post::with('translations')->paginate(20);

        return response()->json($pages);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'key' => 'required|string|unique:pages,key',
            'is_active' => 'boolean',
            'translations' => 'required|array|min:1',
            'translations.*.locale' => 'required|string|max:5',
            'translations.*.title' => 'required|string',
            'translations.*.slug' => 'required|string',
            'translations.*.content' => 'nullable|string',
        ]);

        return DB::transaction(function () use ($data) {
            $page = Post::create([
                'key' => $data['key'],
                'is_active' => $data['is_active'] ?? true,
            ]);

            foreach ($data['translations'] as $t) {
                $page->translations()->create($t);
            }

            return response()->json($page->load('translations'), 201);
        });
    }

    public function show(Post $page)
    {
        $page->load('translations');
        return response()->json($page);
    }

    public function update(Request $request, Post $page)
    {
        $data = $request->validate([
            'key' => 'sometimes|string|unique:pages,key,' . $page->id,
            'is_active' => 'sometimes|boolean',
            'translations' => 'sometimes|array|min:1',
            'translations.*.locale' => 'required_with:translations|string|max:5',
            'translations.*.title' => 'required_with:translations|string',
            'translations.*.slug' => 'required_with:translations|string',
            'translations.*.content' => 'nullable|string',
        ]);

        return DB::transaction(function () use ($data, $page) {
            $page->update([
                'key' => $data['key'] ?? $page->key,
                'is_active' => $data['is_active'] ?? $page->is_active,
            ]);

            if (!empty($data['translations'])) {
                foreach ($data['translations'] as $t) {
                    PostTranslation::updateOrCreate(
                        [
                            'page_id' => $page->id,
                            'locale' => $t['locale'],
                        ],
                        $t
                    );
                }
            }

            return response()->json($page->load('translations'));
        });
    }

    public function destroy(Post $page)
    {
        $page->delete();

        return response()->json(['message' => 'Deleted']);
    }
}
