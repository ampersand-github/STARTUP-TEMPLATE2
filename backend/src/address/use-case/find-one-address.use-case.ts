import { Inject, Injectable } from "@nestjs/common";
import { IAddressRepository } from "../domain/interface/address.interface";
import { AddressResponseDto } from "./response/address.response-dto";
import { AccountId } from "src/acount/domain/account-id";

@Injectable()
export class FindOneAddressUseCase {
  constructor(
    @Inject("AddressRepositoryProvide") private readonly addressRepository: IAddressRepository
  ) {}

  public async execute(id: string): Promise<AddressResponseDto> {
    try {
      const accountId = AccountId.reBuild(id);
      const address = await this.addressRepository.findOne(accountId);
      if (!address) throw new Error("住所が見つかりません");
      return new AddressResponseDto(address);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
