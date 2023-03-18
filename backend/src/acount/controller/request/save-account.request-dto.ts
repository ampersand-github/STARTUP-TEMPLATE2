import { IsNotEmpty, IsString } from "class-validator";

export class SaveAccountRequestDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}
