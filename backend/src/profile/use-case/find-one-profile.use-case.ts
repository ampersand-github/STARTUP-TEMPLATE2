import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository } from "../domain/interface/profile.interface";
import { ProfileId } from "../domain/profile-id";
import { ProfileResponseDto } from "./response/profile.response-dto";

@Injectable()
export class FindOneProfileUseCase {
  constructor(
    @Inject("ProfileRepositoryProvide") private readonly profileRepository: IProfileRepository
  ) {}

  public async execute(id: string): Promise<ProfileResponseDto> {
    try {
      const profileId = ProfileId.reBuild(id);
      const profile = await this.profileRepository.findOne(profileId);
      return new ProfileResponseDto(profile);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
