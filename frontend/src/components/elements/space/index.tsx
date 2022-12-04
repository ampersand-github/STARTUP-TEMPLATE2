import { Box } from "@mui/material";

export interface ISpace {
  width?: number;
  height?: number;
}

export const Space = ({ width = 0, height = 0 }: ISpace) => {
  const baseSpacing = 8;
  return <Box width={baseSpacing * width} height={baseSpacing * height} />;
};
