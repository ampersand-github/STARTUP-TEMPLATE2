import { CircularProgress, Stack } from "@mui/material";
import { useAuth } from "src/services/hooks/use-auth";
import * as React from "react";

export default function Profile() {
  const { isUserLoading } = useAuth();

  if (isUserLoading) return <CircularProgress />;

  return <Stack>{"Profile"}</Stack>;
}
