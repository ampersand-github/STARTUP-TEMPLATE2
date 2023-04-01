import { IProfile, Profile } from "../domain/profile";
import { Inject, Injectable } from "@nestjs/common";
import { ProfileId } from "../domain/profile-id";
import { IProfileRepository } from "../domain/interface/profile.interface";
import { SaveProfileRequestDto } from "../controller/request/save-profile.request-dto";
import { AccountId } from "src/acount/domain/account-id";

@Injectable()
export class SaveProfileUseCase {
  constructor(
    @Inject("ProfileRepositoryProvide") private readonly profileRepository: IProfileRepository
  ) {}

  public async execute(id: string, dto: SaveProfileRequestDto): Promise<void> {
    try {
      const profileId = ProfileId.reBuild(id);
      const props: IProfile = {
        accountId: AccountId.reBuild(id),
        nickName: dto.nickName,
        iconPath: dto.iconPath,
        motto: dto.motto,
        profileText: dto.profileText,
      };
      const profile: Profile = Profile.reBuild(props, profileId);
      await this.profileRepository.save(profile);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
