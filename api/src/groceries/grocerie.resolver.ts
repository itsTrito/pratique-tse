import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GrocerieService } from "./grocerie.service";
import { GrocerieListItem } from "../graphql.schema";
import { CreateGrocerieItemDto } from "./dto/create-grocerie-item.dto";
import { UpdateGrocerieItemDto } from "./dto/update-grocerie-item.dto";

@Resolver(() => GrocerieListItem)
export class GrocerieResolver {
  constructor(private readonly grocerieService: GrocerieService) {}

  @Query(() => [GrocerieListItem])
  public groceries(): GrocerieListItem[] {
    return this.grocerieService.findAll();
  }

  @Query(() => GrocerieListItem)
  public grocery(@Args("id") id: number): GrocerieListItem {
    return this.grocerieService.findOne(id);
  }

  @Mutation(() => GrocerieListItem)
  public createGrocery(
    @Args("dto") createGrocerieItemDto: CreateGrocerieItemDto,
  ): GrocerieListItem {
    return this.grocerieService.createGrocerie(createGrocerieItemDto);
  }

  @Mutation(() => GrocerieListItem)
  public updateGrocery(
    @Args("id") id: number,
    @Args("dto") dto: UpdateGrocerieItemDto,
  ): GrocerieListItem {
    return this.grocerieService.update(id, dto);
  }

  @Mutation(() => GrocerieListItem)
  public deleteGrocery(@Args("id") id: number): GrocerieListItem {
    return this.grocerieService.delete(id);
  }
}
