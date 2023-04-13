import { Box } from "@mui/material";

export interface ISizedBox {
  width?: number;
  height?: number;
}

export const SizedBox = ({ width = 0, height = 0 }: ISizedBox) => {
  const baseSpacing = 8;
  return <Box width={baseSpacing * width} height={baseSpacing * height} />;
};
