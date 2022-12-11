import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/module/auth/auth.guard";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Hello";
  }

  // curl http://localhost:3011/auth
  @UseGuards(AuthGuard)
  @Get("auth")
  getHello2(): string {
    return "auth";
  }
}

// curl http://localhost:3011/
