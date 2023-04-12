import { getAddressResult } from "@features/address/api/get-address-result";
import { initialAddressValue } from "@features/address/initial-values/initial-address-value";
import { useAddressFromPostalCode } from "@features/address/api/get-address-from-postal-code";
import React, { useEffect, useState } from "react";
import { IAddress } from "@features/address/interfaces/address-interface";
import { saveAddress } from "@features/address/api/save-address";
import { toast } from "react-toastify";
import { AddressFormPresenter } from "@features/address/components/address-form/index.presenter";
import { SubmitHandler, useForm } from "react-hook-form";

export const AddressForm = () => {
  const [address, setAddress] = useState<IAddress>(initialAddressValue);
  const [postalCode, setPostalCode] = useState<IAddress["postalCode"]>("");
  const { addressResult } = getAddressResult();
  const { selectedAddress, refetch } = useAddressFromPostalCode(postalCode);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IAddress>({ defaultValues: initialAddressValue });
  const postalCodeWatcher = watch("postalCode");

  useEffect(() => setPostalCode(postalCodeWatcher), [postalCodeWatcher]);
  useEffect(() => reset(address), [address]);

  // 最初にバックエンドから取得した住所をフォームにセットする
  useEffect(() => {
    if (addressResult?.isOk && addressResult.value) {
      setAddress(addressResult.value);
    }
  }, [addressResult]);

  // 郵便番号のインプットに応じて住所を外部のAPIから取得する
  useEffect(() => {
    (async () => {
      const _postalCode = addressResult?.value?.postalCode;
      if (postalCode.length === 7 && _postalCode !== postalCode) {
        await refetch();
      }
    })();
  }, [postalCode]);

  // 外部から住所を取得したらフォームにセットする
  useEffect(() => {
    if (!selectedAddress) return;
    setAddress(selectedAddress);
  }, [selectedAddress]);

  const onSubmit: SubmitHandler<IAddress> = async (data: IAddress) => {
    const result = await saveAddress(data);
    result.status === 201 ? toast.success("保存しました") : toast.error("保存に失敗しました");
  };

  return (
    <AddressFormPresenter control={control} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
  );
};
