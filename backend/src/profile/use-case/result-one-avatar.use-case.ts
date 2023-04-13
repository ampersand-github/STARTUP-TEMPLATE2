import { Inject, Injectable } from "@nestjs/common";
import { IProfileRepository } from "../domain/interface/profile.interface";
import { ProfileId } from "../domain/profile-id";
import { AvatarResultResponseDto } from "src/profile/use-case/response/avatar-result.response-dto";

@Injectable()
export class ResultOneAvatarUseCase {
  constructor(
    @Inject("ProfileRepositoryProvide") private readonly profileRepository: IProfileRepository
  ) {}

  public async execute(id: string): Promise<AvatarResultResponseDto> {
    try {
      const profileId = ProfileId.reBuild(id);
      const profile = await this.profileRepository.findOne(profileId);
      return new AvatarResultResponseDto(profile);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
