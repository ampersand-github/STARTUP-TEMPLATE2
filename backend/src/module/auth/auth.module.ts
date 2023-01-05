import { Module } from "@nestjs/common";
import { AuthService } from "src/module/auth/auth.service";
import { ConfigService } from "@nestjs/config";
import { FirebaseService } from "src/module/firebase/firebase.service";
import { AuthController } from "./auth.controller";

@Module({
  controllers: [AuthController],
  providers: [AuthService, ConfigService, FirebaseService],
  exports: [AuthService],
})
export class AuthModule {}
