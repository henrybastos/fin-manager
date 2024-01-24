import { Database } from "./types";
import { Kysely, SqliteDialect } from "kysely";
import SQLite from  'better-sqlite3';

const dialect = new SqliteDialect({
    database: new SQLite('./data.db', { verbose: console.log })
});

export const db = new Kysely<Database>({ dialect });