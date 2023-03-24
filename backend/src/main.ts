import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from "@fastify/helmet";
import fastifyCsrf from "@fastify/csrf-protection";

async function bootstrap() {
  const fastify = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify);

  // セキュリティ
  await app.register(helmet);
  app.enableCors({
    origin: "http://localhost:3010", //アクセス許可するオリジン
  });
  await app.register(fastifyCsrf);

  // アプリケーション
  await app.listen(3011, "0.0.0.0");
}

bootstrap();
