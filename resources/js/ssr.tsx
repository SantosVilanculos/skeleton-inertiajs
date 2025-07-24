import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { renderToString } from 'react-dom/server';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Ziggy } from '@/ziggy';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
globalThis.Ziggy = Ziggy;

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }) => <App {...props} />
    })
);
