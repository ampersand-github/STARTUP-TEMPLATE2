import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { SampleController } from "./controller/sample.controller";
import { SampleRepository } from "./repository/sample.repository";
import { FindOneSampleUseCase } from "./use-case/find-one-sample.use-case";
import { MayBeSampleUseCase } from "./use-case/may-be-sample.use-case";
import { SaveSampleUseCase } from "./use-case/save-sample.use-case";
import { ExceptionModule } from "src/module/exception/exception.module";

@Module({
  imports: [AuthModule, PrismaModule, ExceptionModule],
  controllers: [SampleController],
  providers: [
    { provide: "SampleRepositoryProvide", useClass: SampleRepository },
    SaveSampleUseCase,
    FindOneSampleUseCase,
    MayBeSampleUseCase,
  ],
  exports: [],
})
export class SampleModule {}
