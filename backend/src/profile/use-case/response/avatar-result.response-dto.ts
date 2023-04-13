import { Profile } from "../../domain/profile";

export class AvatarResultResponseDto {
  isOk: boolean;
  value?: string;
  public constructor(profile?: Profile) {
    if (profile) {
      this.isOk = true;
      this.value = profile.iconPath;
    } else {
      this.isOk = false;
      this.value = undefined;
    }
  }
}
