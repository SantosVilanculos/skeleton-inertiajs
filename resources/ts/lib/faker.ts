import { en, Faker, pt_PT } from '@faker-js/faker';

export const faker = new Faker({
    locale: [pt_PT, en]
});
