'use server'

import { db } from "./database";

export async function createTable () {
    await db.schema.createTable('users')
        .addColumn('id', 'integer', cb => cb.primaryKey().autoIncrement().notNull())
        .addColumn('username', 'varchar(255)', cb => cb.notNull())
        .addColumn('password', 'varchar(255)', cb => cb.notNull())
        .ifNotExists()
        .execute();
}