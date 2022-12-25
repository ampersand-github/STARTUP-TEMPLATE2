import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { CreateAccountUseCase } from "src/account/use-case/create-account.use-case";
import { FindAccountUseCase } from "../use-case/find-account.use-case";

@Controller("account")
export class AccountController {
  constructor(
    private readonly createAccountUseCase: CreateAccountUseCase,
    private readonly findAccountUseCase: FindAccountUseCase
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<string> {
    try {
      const result = await this.findAccountUseCase.execute(request.uid);
      return result.id.toString();
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  public async createAccount(@Req() request: CustomRequest): Promise<void> {
    return await this.createAccountUseCase.execute(request.uid);
  }
}
