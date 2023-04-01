import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository } from "../domain/interface/profile.interface";
import { ProfileId } from "../domain/profile-id";
import { ProfileResultResponseDto } from "./response/profile-result.response-dto";

@Injectable()
export class ResultOneProfileUseCase {
  constructor(
    @Inject("ProfileRepositoryProvide") private readonly profileRepository: IProfileRepository
  ) {}

  public async execute(id: string): Promise<ProfileResultResponseDto> {
    try {
      const profileId = ProfileId.reBuild(id);
      const profile = await this.profileRepository.findOne(profileId);
      return new ProfileResultResponseDto(profile);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
