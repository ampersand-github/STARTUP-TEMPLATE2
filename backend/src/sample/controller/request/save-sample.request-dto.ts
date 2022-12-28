import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SaveSampleRequestDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  gender: string;
}
