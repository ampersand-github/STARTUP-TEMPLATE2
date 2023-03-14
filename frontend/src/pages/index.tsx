import { Stack } from "@mui/material";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { HomeTemplate } from "@/components/templates/home-template";

const Home: NextPage = () => {
  return (
    <Stack>
      <NextSeo />
      <HomeTemplate />
    </Stack>
  );
};
export default Home;
