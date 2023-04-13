import * as React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export interface ICustomListItem {
  text: string;
  href: string;
}
export const CustomListItem = ({ text, href }: ICustomListItem) => {
  return (
    <ListItem>
      <ListItemButton component="a" href={href}>
        <ListItemText primary={text} />
        <ArrowForwardIosIcon opacity={0.6} fontSize={"small"} />
      </ListItemButton>
    </ListItem>
  );
};
