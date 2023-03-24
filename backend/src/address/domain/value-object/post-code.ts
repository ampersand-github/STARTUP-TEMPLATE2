import { ValueObject } from "src/__shared__/domain/value-object";

export interface IPostCode {
  value: string;
}
export class PostCode extends ValueObject<IPostCode> {
  private readonly LENGTH = 7;
  public get value(): IPostCode["value"] {
    return this._props.value;
  }

  public constructor(props: IPostCode) {
    super(props);
    if (this._props.value.length !== this.LENGTH)
      throw new Error("郵便番号桁数が7桁ではありません。7桁で入力してください");
    // todo 数値7桁でない場合はエラー
  }
}
