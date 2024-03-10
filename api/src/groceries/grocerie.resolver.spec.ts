import { Test, TestingModule } from "@nestjs/testing";
import { GrocerieService } from "./grocerie.service";
import { GrocerieResolver } from "./grocerie.resolver";

describe("GrocerieResolver", () => {
  let grocerieResolver: GrocerieResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [GrocerieService, GrocerieResolver],
    }).compile();

    grocerieResolver = app.get<GrocerieResolver>(GrocerieResolver);
  });
});
