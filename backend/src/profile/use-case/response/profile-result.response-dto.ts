import { Profile } from "../../domain/profile";
import { ProfileResponseDto } from "./profile.response-dto";

export class ProfileResultResponseDto {
  isOk: boolean;
  value?: ProfileResponseDto;
  public constructor(profile?: Profile) {
    if (profile) {
      this.isOk = true;
      this.value = new ProfileResponseDto(profile);
    } else {
      this.isOk = false;
      this.value = undefined;
    }
  }
}
