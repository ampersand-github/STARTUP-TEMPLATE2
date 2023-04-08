import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import Error from "next/error";
import { toast } from "react-toastify";
import { useFetchAddressResult } from "@common/api/get/use-fetch-address-result";
import { useAddressData } from "@common/hooks/use-address-data";
import { IAddress } from "src/common/components/organisms/address-form";
import { saveAddress } from "@common/api/post/save-address";
import { AddressTemplate } from "src/common/components/templates/my/address-template";
import { withAuth } from "@common/hoc/with-auth";

interface ISsrProps {
  props: { token: string };
}

const Address: NextPage<ISsrProps> = ({ props: { token } }: ISsrProps) => {
  const { data, error, isLoading } = useFetchAddressResult(token);
  const [postalCode, setPostalCode] = useState<string>("");
  const { selectedAddress, isLoading: isLoadingSelected, refetch } = useAddressData(postalCode);
  const [_selectedAddress, setSelectedAddress] = useState<IAddress>();

  useEffect(() => {
    if (isLoading) return;
    if (data?.isOk) setSelectedAddress(data.value);
  }, [isLoading]);

  useEffect(() => {
    // 初回レンダリング時にバックエンドの値と同じなら再取得しない。じゃないと、バックエンドに登録したデータがほしいのに、住所APIのデータで上書きされてしまう
    if (postalCode?.length === 7 && postalCode !== data?.value?.postalCode) refetch();
  }, [postalCode, isLoading]);

  useEffect(() => {
    setSelectedAddress(selectedAddress);
  }, [selectedAddress]);

  const onSubmit = async (data: IAddress) => {
    const result = await saveAddress(data, token);
    result.status === 201 ? toast.success("保存しました") : toast.error("保存に失敗しました");
  };

  const handleChangePostalCode = (value: string) => setPostalCode(value);

  if (error) return <Error statusCode={error.code} />;
  return (
    <AddressTemplate
      address={_selectedAddress}
      isLoading={isLoading || isLoadingSelected}
      onSubmit={onSubmit}
      changePostalCode={handleChangePostalCode}
    />
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  const token = context.req.cookies.token || "";
  return {
    props: { token: token },
  };
});

export default Address;
