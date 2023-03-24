import { Inject, Injectable } from "@nestjs/common";
import { IAddressRepository } from "../domain/interface/address.interface";
import { AccountId } from "src/acount/domain/account-id";
import { AddressResultResponseDto } from "src/address/use-case/response/address-result.response-dto";

@Injectable()
export class ResultOneAddressUseCase {
  constructor(
    @Inject("AddressRepositoryProvide") private readonly addressRepository: IAddressRepository
  ) {}

  public async execute(id: string): Promise<AddressResultResponseDto> {
    try {
      const accountId = AccountId.reBuild(id);
      const address = await this.addressRepository.findOne(accountId);
      return new AddressResultResponseDto(address);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
