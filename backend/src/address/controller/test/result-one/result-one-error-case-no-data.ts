import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";

export const resultOne_errorCase_noData = async (
  app: NestFastifyApplication,
  prisma: PrismaService
) => {
  expect(await prisma.address.count()).toStrictEqual(0);
  return request(app.getHttpServer())
    .get("/address/result")
    .set("Authorization", `Bearer `)
    .expect(200)
    .expect((res) => {
      expect(res.body).toStrictEqual({
        isOk: false,
      });
    });
};
