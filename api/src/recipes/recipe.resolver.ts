import { Resolver, Query } from "@nestjs/graphql";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./models/recipe.model";

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}
  @Query(() => String)
  sayHello(): string {
    return this.recipeService.getHello();
  }
}
