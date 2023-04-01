import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { SaveProfileUseCase } from "../use-case/save-profile.use-case";
import { FindOneProfileUseCase } from "../use-case/find-one-profile.use-case";
import { SaveProfileRequestDto } from "./request/save-profile.request-dto";
import { ProfileResponseDto } from "../use-case/response/profile.response-dto";
import { ResultOneProfileUseCase } from "../use-case/result-one-profile.use-case";
import { ProfileResultResponseDto } from "src/profile/use-case/response/profile-result.response-dto";

@UseGuards(AuthGuard)
@Controller("profile")
export class ProfileController {
  constructor(
    private readonly saveProfileUseCase: SaveProfileUseCase,
    private readonly findOneProfileUseCase: FindOneProfileUseCase,
    private readonly resultOneProfileUseCase: ResultOneProfileUseCase
  ) {}

  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<ProfileResponseDto> {
    try {
      return await this.findOneProfileUseCase.execute(request.uid);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  @Get()
  public async resultOne(@Req() request: CustomRequest): Promise<ProfileResultResponseDto> {
    try {
      return await this.resultOneProfileUseCase.execute(request.uid);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  @Post()
  public async save(
    @Req() request: CustomRequest,
    @Body() dto: SaveProfileRequestDto
  ): Promise<void> {
    try {
      return await this.saveProfileUseCase.execute(request.uid, dto);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
