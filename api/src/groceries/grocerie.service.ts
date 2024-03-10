import { Injectable } from "@nestjs/common";
import { GrocerieListItem } from "../graphql.schema";
import { CreateGrocerieItemDto } from "./dto/create-grocerie-item.dto";
import { UpdateGrocerieItemDto } from "./dto/update-grocerie-item.dto";

@Injectable()
export class GrocerieService {
  private count = 0;
  private readonly groceries: GrocerieListItem[] = [];

  public createGrocerie(
    createGrocerieData: CreateGrocerieItemDto,
  ): GrocerieListItem {
    this.count++;
    const today = new Date();
    const grocery = {
      ...createGrocerieData,
      id: this.count.toString(),
      createdAt: today,
      updatedAt: today,
      bought: false,
      category: "other",
      deletedAt: undefined,
      unit: undefined,
    };
    this.groceries.push(grocery);
    return grocery;
  }

  public findAll(): GrocerieListItem[] {
    return this.groceries;
  }

  public findOne(id: number): GrocerieListItem {
    return this.groceries.find((grocerie) => grocerie.id === id.toString());
  }

  public update(id: number, dto: UpdateGrocerieItemDto): GrocerieListItem {
    const today = new Date();
    const index = this.groceries.findIndex(
      (grocery) => grocery.id === id.toString(),
    );
    if (index !== -1) {
      let grocery = this.groceries[index];
      grocery = {
        ...grocery,
        ...dto,
        updatedAt: today,
      };
      this.groceries[index] = grocery;
      return grocery;
    }
    return null;
  }

  public delete(id: number): GrocerieListItem {
    const today = new Date();
    const index = this.groceries.findIndex(
      (grocery) => grocery.id === id.toString(),
    );
    if (index !== -1) {
      let grocery = this.groceries[index];
      grocery = {
        ...grocery,
        updatedAt: today,
        deletedAt: today,
      };
      this.groceries[index] = grocery;
      return grocery;
    }
    return null;
  }
}
