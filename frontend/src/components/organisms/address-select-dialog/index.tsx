import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
import { IDuplication } from "src/pages/my/address";

interface IMyDialog {
  hideModal: () => void;
  open: boolean;
  duplications: IDuplication[];
}

export const AddressSelectDialog = ({ hideModal, open, duplications }: IMyDialog) => {
  return (
    <Dialog open={open} onClose={hideModal}>
      <DialogTitle>Dialog Content</DialogTitle>
      <div>
        {duplications &&
          duplications.map((one, index) => (
            <DialogContentText key={index}>
              {one.prefecture} {one.city} {one.town}
            </DialogContentText>
          ))}
      </div>
      <DialogActions>
        <Button onClick={hideModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
