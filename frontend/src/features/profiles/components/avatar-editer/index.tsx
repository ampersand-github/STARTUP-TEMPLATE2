import React from "react";
import { Badge, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import { uploadAvatar } from "@features/profiles/api/upload-avatar";
import { useAvatar } from "@features/profiles/api/use-avatar";

export const AvatarEditor = () => {
  const { imageUrl, refetchAvatar } = useAvatar();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (e.target.files) {
      const images = e.target.files[0];
      await uploadAvatar(images);
      await refetchAvatar();
    }
  };

  return (
    <Button component="label">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<EditIcon sx={{ width: 32, height: 32, color: "black", opacity: 0.6 }} />}
      >
        <Image src={imageUrl} style={{ borderRadius: "50%" }} alt="avatar" width={80} height={80} />
      </Badge>
      <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
    </Button>
  );
};
