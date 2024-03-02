import { Resolver } from "@nestjs/graphql";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../graphql.schema";

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}
}
