import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { LoggingModule } from "src/module/logging/logging.module";
import { AllExceptionFilter } from "./all-exception.filter";

@Module({
  imports: [LoggingModule],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionFilter }],
})
export class ExceptionModule {}
