import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Module({
  providers: [ConfigService],
  exports: [],
})
export class AccountModule {}
