import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

interface Props {
  imageUrl: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const AvatarEditor = ({ imageUrl, handleChange }: Props) => {
  return (
    <Button component="label">
      <Image src={imageUrl} style={{ borderRadius: "50%" }} alt="avatar" width={80} height={80} />
      <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
    </Button>
  );
};
