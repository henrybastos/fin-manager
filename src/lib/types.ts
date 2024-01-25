import {
    Insertable,
    Selectable,
    Updateable,
    ColumnType,
    Generated
} from 'kysely';

export interface Database {
    users: UserTable
}

export interface UserTable {
    id: Generated<number>
    username: string
    password: string
    created_at: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UpdateUser = Updateable<UserTable>;