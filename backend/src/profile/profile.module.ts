import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { ExceptionModule } from "src/module/exception/exception.module";
import { ProfileController } from "./controller/profile.controller";
import { ProfileRepository } from "./repository/profile.repository";
import { FindOneProfileUseCase } from "./use-case/find-one-profile.use-case";
import { SaveProfileUseCase } from "./use-case/save-profile.use-case";
import { ResultOneProfileUseCase } from "./use-case/result-one-profile.use-case";
import { ResultOneAvatarUseCase } from "src/profile/use-case/result-one-avatar.use-case";

@Module({
  imports: [AuthModule, PrismaModule, ExceptionModule],
  controllers: [ProfileController],
  providers: [
    { provide: "ProfileRepositoryProvide", useClass: ProfileRepository },
    SaveProfileUseCase,
    FindOneProfileUseCase,
    ResultOneProfileUseCase,
    ResultOneAvatarUseCase,
  ],
  exports: [],
})
export class ProfileModule {}
