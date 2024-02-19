import { Test, TestingModule } from "@nestjs/testing";
import { RecipeService } from "./recipe.service";
import { RecipeResolver } from "./recipe.resolver";

describe("RecipeResolver", () => {
  let recipeResolver: RecipeResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [RecipeService, RecipeResolver],
    }).compile();

    recipeResolver = app.get<RecipeResolver>(RecipeResolver);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(recipeResolver.sayHello()).toBe("Hello World!");
    });
  });
});
