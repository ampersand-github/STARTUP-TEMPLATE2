import React, { useEffect, useState } from "react";
import { IAddress } from "@/components/organisms/address-form";
import { useQueryFetchAddress } from "@/services/hooks/api/use-query-fetch-address";
import { useModal } from "react-modal-hook";
import { AddressSelectDialog } from "@/components/organisms/address-select-dialog";

export const useAddressData = (postalCode: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const { data, refetch, error } = useQueryFetchAddress(postalCode);
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
    setIsLoading(true);
    if (error) console.error("Failed to fetch address data:", error);
    if (data && data.length === 1) setSelectedAddress(data[0]);
    if (data && data.length >= 2) showModal();
    setIsLoading(false);
  }, [data, error]);

  return { selectedAddress, isLoading, refetch };
};
