import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { run } from 'vite-plugin-run';

export default defineConfig({
    plugins: [
        laravel({
            input: ['./resources/css/app.css', './resources/ts/app.tsx'],
            refresh: true
        }),
        react(),
        tailwindcss(),
        run({
            input: [
                {
                    build: false,
                    run: ['php', 'artisan', 'ide-helper:generate']
                },
                {
                    run: ['php', 'artisan', 'ide-helper:models', '-N'],
                    pattern: ['./app/Models/**/*.php']
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': '/resources/ts'
        }
    },
    esbuild: {
        jsx: 'automatic'
    }
});
