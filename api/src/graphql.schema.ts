
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract sayHello(): string | Promise<string>;
}

export class User {
    id: string;
    name: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export type DateTime = Date;
type Nullable<T> = T | null;
