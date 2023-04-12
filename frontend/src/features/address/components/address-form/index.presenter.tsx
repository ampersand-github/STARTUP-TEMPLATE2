import { Button, Stack } from "@mui/material";
import { IAddress } from "@features/address/interfaces/address-interface";
import { PostalCodeTextField } from "./ui/postcal-code-text-field";
import { CityTextField } from "./ui/city-text-field";
import { PrefectureTextField } from "./ui/prefecture-text-field";
import { TownTextField } from "./ui/town-text-field";
import { Control, FieldErrors } from "react-hook-form";
import { BlockTextField } from "./ui/block-text-field";

interface Props {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
  handleSubmit: () => void;
}

export const AddressFormPresenter = ({ control, errors, handleSubmit }: Props) => {
  return (
    <Stack component="form" noValidate onSubmit={handleSubmit} spacing={2}>
      <PostalCodeTextField control={control} errors={errors} />
      <PrefectureTextField control={control} errors={errors} />
      <CityTextField control={control} errors={errors} />
      <TownTextField control={control} errors={errors} />
      <BlockTextField control={control} errors={errors} />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
};
