import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    allowedHeaders: [
      "origin",
      "content-type",
      "authorization",
      ...(process.env.ALLOW_HEADERS || "").split(" "),
    ],
    origin: "http://localhost:3000",
    credentials: true,
  });
  await app.listen(3200);
}
bootstrap();
