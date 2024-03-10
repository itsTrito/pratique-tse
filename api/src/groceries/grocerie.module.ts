import { Module } from "@nestjs/common";
import { GrocerieService } from "./grocerie.service";
import { GrocerieResolver } from "./grocerie.resolver";

@Module({
  providers: [GrocerieService, GrocerieResolver],
})
export class GrocerieModule {}
