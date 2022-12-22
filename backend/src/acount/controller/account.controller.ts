import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";

@Controller()
export class AccountController {
  @Get()
  getHello(): string {
    return "Hello";
  }

  // curl http://localhost:3011/auth
  @UseGuards(AuthGuard)
  @Get("auth")
  getHello2(@Req() request: CustomRequest): string {
    return request.uid;
  }
}
