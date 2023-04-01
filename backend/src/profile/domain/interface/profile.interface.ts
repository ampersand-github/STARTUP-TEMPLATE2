import { Profile } from "../profile";
import { ProfileId } from "../profile-id";

export interface IProfileRepository {
  isExist(id: ProfileId): Promise<boolean>;
  findOne(id: ProfileId): Promise<Profile>;
  save(profile: Profile): Promise<Profile>;
}
