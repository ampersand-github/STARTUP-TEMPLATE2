import { Address } from "src/address/domain/address";

export class AddressResponseDto {
  private readonly postCode: string;
  private readonly prefecture: string;
  private readonly city: string;
  private readonly town: string;
  private readonly block?: string;
  public constructor(address: Address) {
    this.postCode = address.postCode.value;
    this.prefecture = address.prefecture.value;
    this.city = address.city;
    this.town = address.town;
    this.block = address.block;
  }
}
