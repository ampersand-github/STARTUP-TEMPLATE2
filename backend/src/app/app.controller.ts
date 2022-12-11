import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";

@Controller()
export class AppController {
  constructor() {}

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
