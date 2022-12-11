import { Module } from "@nestjs/common";
import { AppController } from "src/app/app.controller";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/auth/auth.module";

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      // 全てのmoduleで使用できるように
      isGlobal: true,
      // NODE_ENVの値によって読み込むファイルを変更する
      // todo 書き方考える
      envFilePath: ENV === "development" ? ".env.development" : `.env.${ENV}`,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
