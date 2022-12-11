import { Module } from "@nestjs/common";
import { FirebaseService } from "src/module/firebase/firebase.service";
import { ConfigService } from "@nestjs/config";

// @Global() <- 一旦つけずにやってみる
@Module({
  providers: [FirebaseService, ConfigService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
