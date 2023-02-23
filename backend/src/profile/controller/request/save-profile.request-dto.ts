import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SaveProfileRequestDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  gender: string;
}
