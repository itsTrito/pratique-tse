import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateGrocerieItemDto {
  @Field()
  title?: string;
  @Field()
  quantity?: number;
  @Field()
  bought?: boolean;
}
