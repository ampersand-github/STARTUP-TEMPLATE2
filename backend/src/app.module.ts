import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/module/auth/auth.module";
import { AccountModule } from "./acount/account.module";
import { QueryServiceModule } from "src/module/query-service/query-service.module";
import { SampleModule } from "src/sample/sample.module";
import { ProfileModule } from "src/profile/profile.module";
import { AddressModule } from "src/address/address.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      // 全てのmoduleで使用できるように
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
    QueryServiceModule,
    SampleModule,
    AccountModule,
    ProfileModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
