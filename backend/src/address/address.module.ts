import { Module } from "@nestjs/common";
import { AuthModule } from "src/module/auth/auth.module";
import { PrismaModule } from "src/module/prisma/prisma.module";
import { AddressController } from "./controller/address.controller";
import { AddressRepository } from "./repository/address.repository";
import { FindOneAddressUseCase } from "./use-case/find-one-address.use-case";
import { SaveAddressUseCase } from "./use-case/save-address.use-case";
import { ResultOneAddressUseCase } from "src/address/use-case/result-one-address.use-case";
import { ExceptionModule } from "src/module/exception/exception.module";

@Module({
  imports: [AuthModule, PrismaModule, ExceptionModule],
  controllers: [AddressController],
  providers: [
    { provide: "AddressRepositoryProvide", useClass: AddressRepository },
    SaveAddressUseCase,
    FindOneAddressUseCase,
    ResultOneAddressUseCase,
  ],
  exports: [],
})
export class AddressModule {}
