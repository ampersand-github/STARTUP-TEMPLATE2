import { useModal } from "react-modal-hook";
import React, { useEffect, useState } from "react";
import { joinUrl } from "@common/lib/join-rul";
import axios from "axios";
import { axiosConfig } from "@common/configs/axios-config";
import { useQuery } from "@tanstack/react-query";
import { IAddress } from "../interfaces/address-interface";
import { AddressSelectDialog } from "../ui/address-select-dialog";
import { ApiUrl } from "@common/configs/api-url";

interface results {
  address1: string; // 県
  address2: string; // 市区町村
  address3: string; // 町名以下
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
}
export const useAddressFromPostalCode = (postalCode: string) => {
  const fetch = async (): Promise<IAddress[]> => {
    const url = joinUrl(ApiUrl.API_FETCH_ADDRESS, { postalCode: postalCode });
    const res = await axios.get(url, await axiosConfig());
    if (res.data.results.length === null) return [];
    return res.data.results.map((one: results) => {
      return {
        postalCode: one.zipcode,
        prefecture: one.address1,
        city: one.address2,
        town: one.address3,
      };
    });
  };
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const { data, isLoading, error, refetch } = useQuery<IAddress[]>(["zipCloud"], fetch, {
    enabled: false,
  });
  const [showModal, hideModal] = useModal(
    ({ in: open }) => (
      <AddressSelectDialog
        hideModal={hideModal}
        open={open}
        address={data as IAddress[]}
        setAddress={setSelectedAddress}
      />
    ),
    [data]
  );

  useEffect(() => {
    if (isLoading) return;
    if (error) console.error("Failed to fetch address data:", error);
    if (data && data.length === 1) setSelectedAddress(data[0]);
    if (data && data.length >= 2) showModal();
  }, [data, isLoading]);

  return { selectedAddress, refetch };
};
