import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";

describe("UserResolver", () => {
  let userResolver: UserResolver;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserResolver],
    }).compile();

    userResolver = app.get<UserResolver>(UserResolver);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(userResolver.sayHello()).toBe("Hello World!");
    });
  });

  describe("users", () => {
    it("should return list of users", () => {
      const users = userResolver.users();
      expect(users).toHaveLength(3);
      expect(users[0]).toHaveProperty("id");
      expect(users[0]).toHaveProperty("name");
      expect(users[0]).toHaveProperty("createdAt");
      expect(users[0]).toHaveProperty("updatedAt");
      expect(users[0].id).toBe("1");
      expect(users[0].name).toBe("John Doe");
    });
  });
});
