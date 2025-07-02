import { z } from '@/lib/zod';

export const env = z
    .object({
        VITE_APP_NAME: z.string(),
        VITE_APP_ENV: z.enum(['local', 'testing', 'production']),
        VITE_APP_DEBUG: z.coerce.boolean(),
        VITE_APP_TIMEZONE: z.string().refine(value => Intl.supportedValuesOf('timeZone').includes(value)),
        VITE_APP_URL: z.url()
    })
    .parse(import.meta.env);
