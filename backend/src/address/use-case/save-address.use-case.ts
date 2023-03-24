import { IAddress, Address } from "../domain/address";
import { Inject, Injectable } from "@nestjs/common";
import { AddressId } from "../domain/address-id";
import { IAddressRepository } from "../domain/interface/address.interface";
import { SaveAddressRequestDto } from "../controller/request/save-address.request-dto";
import { PostalCode } from "src/address/domain/value-object/post-code";
import { Prefecture } from "src/address/domain/value-object/prefecture";
import { AccountId } from "src/acount/domain/account-id";

@Injectable()
export class SaveAddressUseCase {
  constructor(
    @Inject("AddressRepositoryProvide") private readonly addressRepository: IAddressRepository
  ) {}

  public async execute(id: string, dto: SaveAddressRequestDto): Promise<void> {
    try {
      const accountId = AccountId.reBuild(id);
      const one: Address | undefined = await this.addressRepository.findOne(accountId);
      const addressId = one ? one.id : AddressId.create();
      const props: IAddress = {
        accountId: one ? one.accountId : accountId,
        postalCode: new PostalCode({ value: dto.postalCode }),
        prefecture: new Prefecture({ value: dto.prefecture }),
        city: dto.city,
        town: dto.town,
        block: dto.block ? dto.block : "",
      };
      const address: Address = Address.reBuild(props, addressId);
      await this.addressRepository.save(address);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
