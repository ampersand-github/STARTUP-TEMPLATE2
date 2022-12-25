import { Module } from "@nestjs/common";
import { CreateAccountUseCase } from "./use-case/create-account.use-case";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { AccountRepository } from "./repository/account.repository";
import { FindAccountUseCase } from "./use-case/find-account.use-case";
import { AccountController } from "./controller/account.controller";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AccountController],
  providers: [
    { provide: "AccountRepositoryProvide", useClass: AccountRepository },
    CreateAccountUseCase,
    FindAccountUseCase,
  ],
  exports: [],
})
export class AccountModule {}
