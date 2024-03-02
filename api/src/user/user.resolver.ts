import { Resolver, Query } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "../graphql.schema";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users(): User[] {
    return this.userService.users();
  }

  @Query(() => String)
  sayHello(): string {
    return this.userService.getHello();
  }
}
