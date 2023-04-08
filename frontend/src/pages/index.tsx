import { HomeTemplate } from "@common/components/templates/home-template";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <Stack>
      <NextSeo />
      <HomeTemplate />
    </Stack>
  );
};
export default Home;
