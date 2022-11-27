import { Stack } from "@mui/material";
import Head from "next/head";
import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
import { Section } from "../components/organisms/section";

export default function Home() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <Stack>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/Users/dev/my/app/code/Projects/template/frontend/public/favicon.ico"
        />
      </Head>
      <Header />
      <Section>
        {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
        {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
      </Section>
      <Footer />
    </Stack>
  );
}
