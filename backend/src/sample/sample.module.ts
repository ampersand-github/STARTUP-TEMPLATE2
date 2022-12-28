import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { SampleController } from "./controller/Sample.controller";
import { SampleRepository } from "./repository/Sample.repository";
import { FindOneSampleUseCase } from "./use-case/find-one-sample.use-case";
import { SaveSampleUseCase } from "./use-case/save-sample.use-case";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [SampleController],
  providers: [
    { provide: "SampleRepositoryProvide", useClass: SampleRepository },
    SaveSampleUseCase,
    FindOneSampleUseCase,
  ],
  exports: [],
})
export class SampleModule {}
