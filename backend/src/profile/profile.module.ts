import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { ProfileController } from "./controller/Profile.controller";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ProfileController],
  providers: [],
  exports: [],
})
export class ProfileModule {}
