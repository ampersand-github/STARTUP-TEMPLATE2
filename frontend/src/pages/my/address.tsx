import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AddressTemplate } from "@/components/templates/my/address-template";
import { IAddress } from "@/components/organisms/address-form";
import { useQueryFetchAddress } from "@/services/hooks/api/use-query-fetch-address";
import { useModal } from "react-modal-hook";
import { AddressSelectDialog } from "@/components/organisms/address-select-dialog";
import { withAuth } from "@/services/hoc/with-auth";

const Address: NextPage = () => {
  const [addressList, setAddressList] = useState<IAddress[]>([]);
  const [postalCode, setPostalCode] = useState<string>("");
  const { data, refetch, error } = useQueryFetchAddress(postalCode);
  // todo バックエンドから住所がある場合は取得する。
  // todo データありなしの場合がある。
  // todo loadingをテンプレートに渡したい
  const [address, setAddress] = useState<IAddress>();
  const [showModal, hideModal] = useModal(
    ({ in: open }) => (
      <AddressSelectDialog
        hideModal={hideModal}
        open={open}
        address={addressList}
        setAddress={setAddress}
      />
    ),
    [addressList]
  );

  useEffect(() => {
    if (error) {
      console.error("Failed to fetch address data:", error);
      return;
    }
    if (!data || data.length === 0) return;
    if (data.length === 1) setAddress(data[0]);
    if (data.length >= 2) {
      setAddressList(data);
      showModal();
    }
  }, [data, error]);

  useEffect(() => {
    if (postalCode.length === 7) refetch();
  }, [postalCode]);

  const onSubmit = (data: IAddress) => console.log("Submitted data:", data);

  const handleChangePostCode = (value: string) => setPostalCode(value);

  return (
    <AddressTemplate address={address} onSubmit={onSubmit} changePostCode={handleChangePostCode} />
  );
};

export default Address;
export const getServerSideProps: GetServerSideProps = withAuth();
