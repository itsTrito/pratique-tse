import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGrocerieItemDto {
  @Field()
  title: string;
  @Field()
  quantity: number;
}
