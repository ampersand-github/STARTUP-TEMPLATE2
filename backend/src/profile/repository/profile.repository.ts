import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { IProfileRepository } from "../domain/interface/profile.interface";
import { Profile } from "../domain/profile";
import { ProfileId } from "../domain/profile-id";
import { profiles } from "@prisma/client";
import { profileMapper } from "./profile.mapper";

@Injectable()
export class ProfileRepository implements IProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async isExist(id: ProfileId): Promise<boolean> {
    const count = await this.prisma.profiles.count({ where: { account_id: id.toString() } });
    return count > 0;
  }

  public async findOne(id: ProfileId): Promise<Profile | undefined> {
    try {
      const _id = id.toString();
      const result: profiles | null = await this.prisma.profiles.findUnique({ where: { id: _id } });
      return result ? profileMapper(result) : undefined;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  public async save(profile: Profile): Promise<Profile> {
    try {
      const id = profile.id.toString();
      const accountId = profile.accountId.toString();
      const property = {
        nick_name: profile.nickName,
        icon_path: profile.iconPath ?? null,
        motto: profile.motto,
        profile_text: profile.profileText,
      };

      const result: profiles = await this.prisma.profiles.upsert({
        where: { id },
        create: { id, account_id: accountId, ...property },
        update: property,
      });

      return profileMapper(result);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
