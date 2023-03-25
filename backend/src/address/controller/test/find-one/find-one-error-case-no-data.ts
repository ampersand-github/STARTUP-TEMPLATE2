import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";

export const findOne_errorCase_noData = async (
  app: NestFastifyApplication,
  prisma: PrismaService
) => {
  expect(await prisma.address.count()).toStrictEqual(0);
  return request(app.getHttpServer())
    .get("/address")
    .set("Authorization", `Bearer `)
    .expect(500)
    .expect((res) => {
      expect(res.body).toStrictEqual({
        statusCode: 500,
        message: "Internal server error",
      });
    });
};
