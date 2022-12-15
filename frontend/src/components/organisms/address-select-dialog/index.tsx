import {
  Box,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Space } from "src/components/elements/space";
import { IDuplicationAddress } from "src/pages/my/address";
interface IMyDialog {
  hideModal: () => void;
  open: boolean;
  address: IDuplicationAddress[];
  setPrefecture: (text: string) => void;
  setCity: (text: string) => void;
  setTown: (text: string) => void;
}

export const AddressSelectDialog = ({
  hideModal,
  open,
  address,
  setPrefecture,
  setCity,
  setTown,
}: IMyDialog) => {
  return (
    <Dialog open={open} onClose={hideModal} fullWidth={true}>
      <Box sx={{ padding: 3 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">住所を選択してください</FormLabel>
          <Space height={2} />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              const _index = Number(e.target.value);
              setPrefecture(address[_index].prefecture);
              setCity(address[_index].city);
              setTown(address[_index].town);
              hideModal();
            }}
          >
            {address.map((one: IDuplicationAddress, index: number) => (
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
