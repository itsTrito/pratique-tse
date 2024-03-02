import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { DateResolver, DateTimeResolver } from "graphql-scalars";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.gql"],
      definitions: {
        path: join(process.cwd(), "src/graphql.schema.ts"),
        outputAs: "class",
        customScalarTypeMapping: {
          DateTime: "Date",
        },
      },
      resolvers: {
        Date: DateResolver,
        DateTime: DateTimeResolver,
      },
    }),
  ],
})
export class AppModule {}
