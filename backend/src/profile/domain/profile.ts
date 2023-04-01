import { AggregateRoot } from "src/__shared__/domain/aggregate-root";
import { ProfileId } from "./profile-id";
import { AccountId } from "src/acount/domain/account-id";

export interface IProfile {
  accountId: AccountId;
  iconPath?: string;
  nickName: string;
  motto: string;
  profileText: string;
}

export class Profile extends AggregateRoot<IProfile, ProfileId> {
  public get accountId(): IProfile["accountId"] {
    return this._props.accountId;
  }

  public get iconPath(): IProfile["iconPath"] {
    return this._props.iconPath;
  }

  public get nickName(): IProfile["nickName"] {
    return this._props.nickName;
  }

  public get motto(): IProfile["motto"] {
    return this._props.motto;
  }

  public get profileText(): IProfile["profileText"] {
    return this._props.profileText;
  }

  private constructor(props: IProfile, id: ProfileId) {
    super(props, id);
    // ここにビジネスルールを書く
  }

  public static create(props: IProfile): Profile {
    return new Profile(props, ProfileId.create());
  }

  public static reBuild(props: IProfile, id: ProfileId): Profile {
    return new Profile(props, id);
  }
}
