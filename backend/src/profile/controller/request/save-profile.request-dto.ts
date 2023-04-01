import { IsNotEmpty, IsString } from "class-validator";

export class SaveProfileRequestDto {
  @IsNotEmpty()
  @IsString()
  nickName: string;

  @IsNotEmpty()
  @IsString()
  iconPath: string;

  @IsNotEmpty()
  @IsString()
  motto: string;

  @IsNotEmpty()
  @IsString()
  profileText: string;
}
