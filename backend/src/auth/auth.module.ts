import { Module } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { ConfigService } from "@nestjs/config";
import { FirebaseService } from "src/firebase/firebase.service";

@Module({
  controllers: [],
  providers: [AuthService, ConfigService, FirebaseService],
  exports: [AuthService],
})
export class AuthModule {}
