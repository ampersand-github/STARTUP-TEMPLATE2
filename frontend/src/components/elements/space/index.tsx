import { Box, useTheme } from "@mui/material";

export interface ISpace {
  width?: number;
  height?: number;
}

export const Space = ({ width = 0, height = 0 }: ISpace) => {
  const theme = useTheme();
  const _width = theme.spacing(width);
  const _height = theme.spacing(height);
  return <Box width={_width} height={_height} />;
};
