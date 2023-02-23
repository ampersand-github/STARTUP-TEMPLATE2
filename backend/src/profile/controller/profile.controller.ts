import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";

@Controller("profile")
export class ProfileController {
  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<any> {
    try {
      // return await this.findOneProfileUseCase.execute(request.uid);
      console.log(request.uid);
      // throw new Error("sss");
      return {
        iconPath: "iconPath",
      };
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  @UseGuards(AuthGuard)
  @Get("may-be")
  public async mayBe(): Promise<any> {
    try {
      return undefined;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
