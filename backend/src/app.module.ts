import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/module/auth/auth.module";
import { AccountModule } from "./acount/account.module";
import { QueryServiceModule } from "src/module/query-service/query-service.module";
import { ProfileModule } from "src/profile/profile.module";
import { AddressModule } from "src/address/address.module";
import { LoggingModule } from "src/module/logging/logging.module";
import { ExceptionModule } from "src/module/exception/exception.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      // 全てのmoduleで使用できるように
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    LoggingModule,
    ExceptionModule,
    AuthModule,
    QueryServiceModule,
    AccountModule,
    ProfileModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
