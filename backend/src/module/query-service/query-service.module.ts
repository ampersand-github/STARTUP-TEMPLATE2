import { Module } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";

@Module({
  providers: [PrismaService],
  // controllers:[controller-1, controller-2, controller-3],
  exports: [],
})
export class QueryServiceModule {}
