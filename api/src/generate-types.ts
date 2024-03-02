import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

// Run manually if needed
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ["./src/**/*.graphql"],
  path: join(process.cwd(), "src/graphql.schema.ts"),
  outputAs: "class",
});
