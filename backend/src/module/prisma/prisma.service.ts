import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }

  async allTruncateForMysql() {
    const allProperties = Object.keys(this);
    const modelNames = allProperties.filter(
      (x) => !(typeof x === "string" && (x.startsWith("$") || x.startsWith("_")))
    );

    // 外部キーを無効化
    await this.$queryRaw`SET FOREIGN_KEY_CHECKS=0`;

    for (const modelName of modelNames) {
      const query = `TRUNCATE TABLE ${modelName}`;
      await this.$queryRawUnsafe(query);
    }
    // 外部キーを再度有効化
    await this.$queryRaw`SET FOREIGN_KEY_CHECKS=1`;
  }
}
