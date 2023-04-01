import { Profile } from "../../domain/profile";

export class ProfileResponseDto {
  private readonly nickname: string;
  private readonly iconPath?: string;
  private readonly motto: string;
  private readonly profileText: string;
  public constructor(profile: Profile) {
    this.nickname = profile.nickName;
    this.iconPath = profile.iconPath;
    this.motto = profile.motto;
    this.profileText = profile.profileText;
  }
}
