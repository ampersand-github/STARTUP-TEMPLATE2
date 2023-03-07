import { useSnackbar, VariantType } from "notistack";

export interface ISnackbar {
  message: string;
  variant: VariantType;
  isPreventDuplicate?: boolean;
}
export const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (props: ISnackbar) =>
    enqueueSnackbar(props.message, {
      variant: props.variant,
      autoHideDuration: 3 * 1000,
      preventDuplicate: props.isPreventDuplicate,
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });
  return { snackbar };
};
