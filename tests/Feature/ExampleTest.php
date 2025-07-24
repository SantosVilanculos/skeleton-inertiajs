<?php

declare(strict_types=1);

use Illuminate\Http\Response;
use Inertia\Testing\AssertableInertia as Assert;

test('up', function (): void {
    $this->get('/up')->assertStatus(Response::HTTP_OK);
});

test('log-viewer', function (): void {
    $this->get('/log-viewer')->assertStatus(Response::HTTP_OK);
});

test('dashboard', function () {
    $response = $this->get('/');

    $response->assertStatus(Response::HTTP_OK);

    $response->assertInertia(fn (Assert $page) => $page
        ->has('VERSION')
        ->has('PHP_VERSION')
    );
});
