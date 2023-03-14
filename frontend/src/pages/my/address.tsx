import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AddressTemplate } from "@/components/templates/my/address-template";
import { IAddress } from "@/components/organisms/address-form";
import { UseQueryFetchAddress } from "@/services/hooks/api/use-query-fetch-address";
import { useModal } from "react-modal-hook";
import { AddressSelectDialog } from "@/components/organisms/address-select-dialog";
import { withAuth } from "@/services/hoc/with-auth";

const Address: NextPage = () => {
  const [addressList, setAddressList] = useState<IAddress[]>([]);
  const [postalCode, setPostalCode] = useState<string>("");
  const { data, refetch } = UseQueryFetchAddress(postalCode);
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

  const dummyAddress: IAddress = {
    postalCode: "1112222",
    prefecture: "東京都",
    city: "千代田区",
    town: "どこか",
    block: "",
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    if (data.length === 1) setAddress(data[0]);
    if (data.length >= 2) {
      setAddressList(data);
      showModal();
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      if (postalCode.length === 7) await refetch();
    })();
  }, [postalCode]);

  const onSubmit = (data: IAddress) => {
    console.log("data2", data);
  };

  const changePostCode = async (value: string) => {
    setPostalCode(value);
  };

  return (
    <AddressTemplate address={dummyAddress} onSubmit={onSubmit} changePostCode={changePostCode} />
  );
};

export const getServerSideProps: GetServerSideProps = withAuth();

export default Address;
