import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const fastify = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify);
  await app.listen(3000, '0.0.0.0');
}

bootstrap();
