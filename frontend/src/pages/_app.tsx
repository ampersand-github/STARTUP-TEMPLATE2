import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../services/constraints/themes";
import Head from "next/head";
import React from "react";
import BasicLayout from "src/components/layouts/basic-layout";

// サンプル
// https://github.com/mui/material-ui/tree/master/examples/nextjs
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>テンプレートサイト</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
        <CssBaseline />
      </ThemeProvider>
    </React.StrictMode>
  );
}
export default MyApp;
