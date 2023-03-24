import { Address } from "src/address/domain/address";
import { AddressResponseDto } from "./address.response-dto";

export class AddressResultResponseDto {
  isOk: boolean;
  value?: AddressResponseDto;
  public constructor(address?: Address) {
    if (address) {
      this.isOk = true;
      this.value = new AddressResponseDto(address);
    } else {
      this.isOk = false;
      this.value = undefined;
    }
  }
}
