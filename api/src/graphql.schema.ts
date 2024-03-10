
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateGroceryDto {
    title: string;
    quantity: number;
}

export class UpdateGroceryDto {
    title?: Nullable<string>;
    quantity?: Nullable<number>;
    bought?: Nullable<boolean>;
}

export class GrocerieListItem {
    id: string;
    title: string;
    quantity: number;
    unit?: Nullable<string>;
    bought: boolean;
    category?: Nullable<string>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export class Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    user: User;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract sayHello(): string | Promise<string>;

    abstract groceries(): GrocerieListItem[] | Promise<GrocerieListItem[]>;

    abstract grocery(id: string): GrocerieListItem | Promise<GrocerieListItem>;
}

export abstract class IMutation {
    abstract createGrocery(dto: CreateGroceryDto): GrocerieListItem | Promise<GrocerieListItem>;

    abstract updateGrocery(id: string, dto: UpdateGroceryDto): GrocerieListItem | Promise<GrocerieListItem>;

    abstract deleteGrocery(id: string): GrocerieListItem | Promise<GrocerieListItem>;
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
