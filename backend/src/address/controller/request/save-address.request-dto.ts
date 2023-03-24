import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SaveAddressRequestDto {
  @IsNotEmpty()
  @IsString()
  postCode: string;

  @IsNotEmpty()
  @IsString()
  prefecture: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  town: string;

  @IsOptional()
  @IsString()
  block: string;
}
