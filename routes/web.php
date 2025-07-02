<?php

declare(strict_types=1);

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('dashboard', [
    'VERSION' => Illuminate\Foundation\Application::VERSION,
    'PHP_VERSION' => PHP_VERSION,
]))->name('dashboard');

if (App::isLocal()) {
    Route::get('/playground', fn () => Inertia::render('playground', []))->name('playground');
}
