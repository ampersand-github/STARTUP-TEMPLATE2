import { SizedBox } from "@common/components/elements/space";
import { AddressForm, IAddress } from "@common/components/organisms/address-form";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { MY_PAGE } from "@common/configs/url/page-url";
import { Loading } from "@common/components/organisms/loading";

export interface IAddressTemplate {
  address?: IAddress;
  isLoading: boolean;
  onSubmit: (data: IAddress) => void;
  changePostalCode: (value: string) => void;
}

export const AddressTemplate = ({
  address,
  isLoading,
  onSubmit,
  changePostalCode,
}: IAddressTemplate): JSX.Element => {
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          トップ
        </Link>
        <Link color="inherit" href={MY_PAGE}>
          各種設定
        </Link>
        <Typography color="textPrimary">住所設定</Typography>
      </Breadcrumbs>
      <SizedBox height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        住所設定
      </Typography>
      <SizedBox height={3} />
      {isLoading ? (
        <Loading />
      ) : (
        <AddressForm address={address} onSubmit={onSubmit} changePostalCode={changePostalCode} />
      )}
    </Stack>
  );
};
