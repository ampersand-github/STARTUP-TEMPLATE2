// https://github.com/iamhosseindhv/notistack/issues/156

import * as React from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import { SnackbarKey, useSnackbar } from "notistack";
import { Close } from "@mui/icons-material";

interface ISnackbarKey {
  snackbarKey: SnackbarKey;
}
function SnackbarCloseButton({ snackbarKey }: ISnackbarKey) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton sx={{ color: "white" }} onClick={() => closeSnackbar(snackbarKey)}>
      <Close />
    </IconButton>
  );
}

export default SnackbarCloseButton;
