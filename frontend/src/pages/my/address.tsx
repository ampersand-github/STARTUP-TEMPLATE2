import React, { useEffect, useState } from "react";
import { useAuth } from "src/services/hooks/use-auth";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "react-modal-hook";
import { UseQueryFetchAddress } from "src/services/hooks/api/use-query-fetch-address";
import { AddressSelectDialog } from "src/components/organisms/address-select-dialog";

// https://blog.kenall.jp/entry/address-form-best-practice

interface IAddress {
  postalCode: string;
  prefecture: string;
  city: string;
  town: string;
  block?: string;
}

export interface IDuplication {
  prefecture: string;
  city: string;
  town: string;
}

const defaultAddressValue: IAddress = {
  postalCode: "",
  prefecture: "",
  city: "",
  town: "",
  block: "",
};

export default function Address() {
  const [duplications, setDuplications] = React.useState<IDuplication[]>([]);
  const [zipCode, setZipCode] = useState("");
  const { data, refetch, isFetching } = UseQueryFetchAddress(zipCode);
  const { isUserLoading } = useAuth();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAddress>({ defaultValues: defaultAddressValue });

  const setPrefecture = (text: string) => setValue("prefecture", text);
  const setCity = (text: string) => setValue("city", text);
  const setTown = (text: string) => setValue("town", text);

  const [showModal, hideModal] = useModal(
    ({ in: open }) => (
      <AddressSelectDialog hideModal={hideModal} open={open} duplications={duplications} />
    ),
    [duplications]
  );

  useEffect(() => {
    (async () => {
      if (zipCode.length !== 7) return;

      await refetch();

      if (!data) return;
      if (data.status !== 200) return;
      if (data.results === null) return;

      if (data.results.length === 1) {
        setPrefecture(data.results[0].address1);
        setCity(data.results[0].address2);
        setTown(data.results[0].address3);
      } else {
        const duplicationList: IDuplication[] = data.results.map((one: any) => {
          return {
            prefecture: one.address1,
            city: one.address2,
            town: one.address3,
          };
        });
        setDuplications(duplicationList);
        showModal();
        // 4801103
      }
    })();
  }, [zipCode, data]);

  // todo zodに変更する
  const validationRules = {
    name: {
      required: "名前を入力してください。",
      minLength: { value: 4, message: "4文字以上で入力してください。" },
    },
    postalCode: {},
    prefecture: {},
    city: {},
    town: {},
    block: {},
  };

  const onSubmit: SubmitHandler<IAddress> = (data: IAddress) => {
    console.log(`submit: ${JSON.stringify(data)}`);
  };

  if (isUserLoading || isFetching) return <CircularProgress />;

  // todo fromをorganismsに送る
  // todo inputとoutputの分離
  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2}>
      <p>4801103</p>
      <Controller
        name="postalCode"
        control={control}
        rules={validationRules.prefecture}
        render={({ field }) => (
          <TextField
            {...field}
            required={true}
            type="text"
            label="郵便番号"
            placeholder="1000001"
            value={zipCode}
            onChange={async (e) => {
              setZipCode(e.target.value);
            }}
            error={errors.prefecture !== undefined}
            helperText={errors.prefecture?.message}
          />
        )}
      />
      <Controller
        name="prefecture"
        control={control}
        rules={validationRules.prefecture}
        render={({ field }) => (
          <TextField
            {...field}
            required={true}
            type="text"
            label="都道府県"
            placeholder="東京都"
            error={errors.prefecture !== undefined}
            helperText={errors.prefecture?.message}
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        rules={validationRules.city}
        render={({ field }) => (
          <TextField
            {...field}
            required={true}
            type="text"
            label="市区町村"
            placeholder="千代田区"
            error={errors.city !== undefined}
            helperText={errors.city?.message}
          />
        )}
      />
      <Controller
        name="town"
        control={control}
        rules={validationRules.town}
        render={({ field }) => (
          <TextField
            {...field}
            required={true}
            type="text"
            label="町名以下"
            placeholder="千代田一丁目一番地"
            error={errors.town !== undefined}
            helperText={errors.town?.message}
          />
        )}
      />
      <Controller
        name="block"
        control={control}
        rules={validationRules.block}
        render={({ field }) => (
          <TextField
            {...field}
            required={false}
            type="text"
            label="建物名・階層・部屋情報"
            error={errors.block !== undefined}
            helperText={errors.block?.message}
          />
        )}
      />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
}
