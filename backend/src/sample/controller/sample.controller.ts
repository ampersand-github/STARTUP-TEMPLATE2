import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { SaveSampleUseCase } from "../use-case/save-sample.use-case";
import { FindOneSampleUseCase } from "../use-case/find-one-sample.use-case";
import { SaveSampleRequestDto } from "./request/save-sample.request-dto";
import { SampleResponseDto } from "../use-case/response/sample.response-dto";

@Controller("sample")
export class SampleController {
  constructor(
    private readonly saveSampleUseCase: SaveSampleUseCase,
    private readonly findOneSampleUseCase: FindOneSampleUseCase
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<SampleResponseDto> {
    try {
      return await this.findOneSampleUseCase.execute(request.uid);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  public async saveSample(
    @Req() request: CustomRequest,
    @Body() dto: SaveSampleRequestDto
  ): Promise<void> {
    try {
      return await this.saveSampleUseCase.execute(request.uid, dto);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
