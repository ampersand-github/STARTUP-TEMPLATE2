import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "src/module/auth/auth.service";
import { IVerifiedStateResponseDto } from "src/module/auth/verified-state-response-dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  public async gry(): Promise<string> {
    console.log("afsfsfs");
    return "aaaa";
  }

  @Post()
  public async isVerifyState(@Body() dto: { idToken: string }): Promise<IVerifiedStateResponseDto> {
    try {
      return await this.authService.isVerified(dto.idToken);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
