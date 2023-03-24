import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { AddressController } from "./controller/address.controller";
import { AddressRepository } from "./repository/address.repository";
import { FindOneAddressUseCase } from "./use-case/find-one-address.use-case";
import { SaveAddressUseCase } from "./use-case/save-address.use-case";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AddressController],
  providers: [
    { provide: "AddressRepositoryProvide", useClass: AddressRepository },
    SaveAddressUseCase,
    FindOneAddressUseCase,
  ],
  exports: [],
})
export class AddressModule {}
