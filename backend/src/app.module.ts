import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/module/auth/auth.module";
import { AccountModule } from "src/acount/account.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      // 全てのmoduleで使用できるように
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
