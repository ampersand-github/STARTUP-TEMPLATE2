import {
  Box,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SizedBox } from "src/components/elements/space";
import { IAddress } from "src/components/organisms/address-form";

interface IMyDialog {
  hideModal: () => void;
  open: boolean;
  address: IAddress[];
  setAddress: (address: IAddress) => void;
}

export const AddressSelectDialog = ({ hideModal, open, address, setAddress }: IMyDialog) => {
  return (
    <Dialog open={open} onClose={hideModal} fullWidth={true}>
      <Box sx={{ padding: 3 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">住所を選択してください</FormLabel>
          <SizedBox height={2} />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              const _index = Number(e.target.value);
              setAddress({
                postalCode: address[_index].postalCode,
                prefecture: address[_index].prefecture,
                city: address[_index].city,
                town: address[_index].town,
                block: address[_index].block,
              });
              hideModal();
            }}
          >
            {address.map((one: IAddress, index: number) => (
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio />}
                label={one.prefecture + " " + one.city + " " + one.town}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Dialog>
  );
};
