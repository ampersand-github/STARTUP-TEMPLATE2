import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { SaveAddressUseCase } from "../use-case/save-address.use-case";
import { FindOneAddressUseCase } from "../use-case/find-one-address.use-case";
import { SaveAddressRequestDto } from "./request/save-address.request-dto";
import { AddressResponseDto } from "../use-case/response/address.response-dto";
import { AddressResultResponseDto } from "src/address/use-case/response/address-result.response-dto";
import { ResultOneAddressUseCase } from "src/address/use-case/result-one-address.use-case";

@UseGuards(AuthGuard)
@Controller("address")
export class AddressController {
  constructor(
    private readonly saveAddressUseCase: SaveAddressUseCase,
    private readonly findOneAddressUseCase: FindOneAddressUseCase,
    private readonly resultOneAddressUseCase: ResultOneAddressUseCase
  ) {}

  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<AddressResponseDto> {
    try {
      return await this.findOneAddressUseCase.execute(request.uid);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  @Get("result")
  public async resultOne(@Req() request: CustomRequest): Promise<AddressResultResponseDto> {
    try {
      return await this.resultOneAddressUseCase.execute(request.uid);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  @Post()
  public async save(
    @Req() request: CustomRequest,
    @Body() dto: SaveAddressRequestDto
  ): Promise<void> {
    try {
      return await this.saveAddressUseCase.execute(request.uid, dto);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
