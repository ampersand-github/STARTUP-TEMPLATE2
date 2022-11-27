import { Box, Stack, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.grey["900"];
  const white = theme.palette.common.white;
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
        <Typography variant="h6" fontWeight="bold">
          footer
        </Typography>
      </Box>
    </Stack>
  );
};
