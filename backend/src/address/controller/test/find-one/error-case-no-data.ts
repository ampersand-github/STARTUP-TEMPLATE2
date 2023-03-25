import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";

export const errorCase_noData = async (app: NestFastifyApplication) => {
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
