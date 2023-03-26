import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import helmet from "@fastify/helmet";
import fastifyCsrf from "@fastify/csrf-protection";
import { LoggingService } from "src/module/logging/logging.service";
import { AllExceptionFilter } from "src/module/exception/all-exception.filter";

async function bootstrap() {
  // const isDev = process.env.NODE_ENV === "development";

  const fastify = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify);

  // ロギング
  const loggingService: LoggingService = app.get(LoggingService);
  app.useLogger(loggingService);

  // 例外
  const aAllExceptionsFilter = new AllExceptionFilter(loggingService);
  app.useGlobalFilters(aAllExceptionsFilter);

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
