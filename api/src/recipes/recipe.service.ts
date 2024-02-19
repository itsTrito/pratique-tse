import { Injectable } from "@nestjs/common";

@Injectable()
export class RecipeService {
  getHello(): string {
    return "Hello World!";
  }
}
