'use server'

import { db } from "./database";
import { NewUser, User,  } from "./types";

export async function checkAndCreateTable () {
    await db.schema.createTable('users')
        .addColumn('id', 'integer', cb => cb.primaryKey().autoIncrement().notNull())
        .addColumn('username', 'varchar(255)', cb => cb.notNull())
        .addColumn('password', 'varchar(255)', cb => cb.notNull())
        .ifNotExists()
        .execute();
}

export async function createUser({ password, username }: NewUser) {
    await db.insertInto('users').values({ password, username }).executeTakeFirstOrThrow();
}

export async function selectUser(username: string): Promise<User | undefined> {
    return await db.selectFrom('users')
        .where('username', '=', username)
        .selectAll()
        .executeTakeFirst();
}

export async function selectAllUsers(): Promise<User | undefined> {
    return await db.selectFrom('users').selectAll().executeTakeFirst();
}