import { ValueObject } from "src/__shared__/domain/value-object";

export const GenderType = {
  notKnown: "不明",
  male: "男性",
  female: "女性",
  notApplicable: "適用不能",
} as const;

export type GenderType = typeof GenderType[keyof typeof GenderType];

export interface IGender {
  value: GenderType;
}
export class Gender extends ValueObject<IGender> {
  public get value(): IGender["value"] {
    return this._props.value;
  }

  public constructor(props: IGender) {
    super(props);
  }

  public static getType(value: string): GenderType {
    const key: string = Object.keys(GenderType).filter((key) => GenderType[key] == value)[0];
    if (!key) throw new Error(`${this.name}が取得できませんでした。`);
    return GenderType[key];
  }
}
