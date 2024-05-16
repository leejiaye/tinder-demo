import { sqliteTable, integer, text  } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    firstName: text('first_name'),
    lastName: text('last_name'),
    gender: text('gender'),
    age: integer('age'),
    location: text('location'),
    interests: text('interests', { mode: 'json' }),
    university: text('university'),
    imageUrl: text('image_url')
});