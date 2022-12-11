import { Module } from "@nestjs/common";
import { AppController } from "src/module/app/app.controller";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/module/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      // 全てのmoduleで使用できるように
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
