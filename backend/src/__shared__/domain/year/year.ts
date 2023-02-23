import { ValueObject } from "../value-object";

export interface IYear {
  value: number;
}

export class Year extends ValueObject<IYear> {
  public get value() {
    return this._props.value;
  }

  public readonly MIN_YEAR: number = 1901;
  public readonly MAX_YEAR: number = new Date().getFullYear();

  public constructor(props: IYear) {
    super(props);
    if (this.MIN_YEAR > props.value || this.MAX_YEAR < props.value) {
      throw new Error(`年は${this.MIN_YEAR}~${this.MAX_YEAR}の間で設定してください。`);
    }
  }
}
