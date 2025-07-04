import { scan } from 'react-scan'; // must be imported before React and React DOM

import { environment } from '@/environment';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { createRoot } from 'react-dom/client';

const { VITE_APP_NAME, VITE_APP_DEBUG } = environment;

scan({
    enabled: VITE_APP_DEBUG,
    animationSpeed: 'off'
});

createInertiaApp({
    title: title => title || VITE_APP_NAME,
    resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <NuqsAdapter>
                <App {...props} />
            </NuqsAdapter>
        );
    }
});
