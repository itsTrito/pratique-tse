import { Injectable } from "@nestjs/common";
import { User } from "../graphql.schema";

@Injectable()
export class UserService {
  users(): User[] {
    return [
      {
        id: "1",
        name: "John Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Jane Doe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Alice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  getHello(): string {
    return "Hello World!";
  }
}
