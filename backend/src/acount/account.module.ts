import { Module } from "@nestjs/common";
import { AccountController } from "src/acount/controller/account.controller";
import { CreateAccountUseCase } from "./use-case/create-account.use-case";
import { AuthModule } from "src/module/auth/auth.module";
import { FindAccountUseCase } from "src/acount/use-case/find-account.use-case";
import { AccountRepository } from "src/acount/repository/account.repository";
import { PrismaModule } from "src/module/prisma/prisma.module";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AccountController],
  providers: [AccountRepository, CreateAccountUseCase, FindAccountUseCase],
  exports: [],
})
export class AccountModule {}
