import { ValueObject } from "../value-object";

export interface IMoney {
  value: number;
}

export class Money extends ValueObject<IMoney> {
  public readonly MIN_PRICE = -999999999999;
  public readonly MAX_PRICE = 999999999999;

  public get value() {
    return this.props.value;
  }

  public constructor(props: IMoney) {
    super(props);
    if (this.MIN_PRICE > props.value || this.MAX_PRICE < props.value) {
      throw new Error(`金額は${this.MIN_PRICE}~${this.MAX_PRICE}の間で設定してください。`);
    }
  }
}
