import { ValueObject } from "src/__shared__/domain/value-object";
import validator from "validator";

export interface IEmail {
  value: string;
}

export class Email extends ValueObject<IEmail> {
  public get value(): IEmail["value"] {
    return this._props.value;
  }

  public constructor(props: IEmail) {
    super(props);
    if (!validator.isEmail(props.value)) throw new Error("メールアドレスの形式が誤っています");
  }
}
