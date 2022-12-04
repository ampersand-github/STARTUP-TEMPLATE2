import { Box, Stack } from "@mui/material";
import { CopyRightText } from "../../elements/text/copy-right-text";

export interface IFooter {
  white: string;
  backgroundColor: string;
  url: string;
}

export const Footer = ({ white, backgroundColor, url }: IFooter) => {
  return (
    <Stack
      sx={{
        bottom: 0, // 最下部に固定
        height: "80px",
        backgroundColor: backgroundColor,
        color: white,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box m="auto">
        <CopyRightText color={white} pageUrl={url} />
      </Box>
    </Stack>
  );
};
