import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import BasicLayout from "src/common/components/layouts/basic-layout";
import { RecoilRoot } from "recoil";
import { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DefaultSeo } from "next-seo";
import { ModalProvider } from "react-modal-hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "@common/configs/themes";
import { SeoConfig } from "@common/configs/seo-config";

// サンプル
// https://github.com/mui/material-ui/tree/master/examples/nextjs

/**
 * https://nextjs.org/docs/basic-features/layouts
 */

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const queryClient = new QueryClient();

  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => {
      return (
        <BasicLayout>
          <Component {...page} />
        </BasicLayout>
      );
    });

  return (
    <React.StrictMode>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SeoConfig} />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <ToastContainer />
              {getLayout(<Component {...pageProps} />)}
              <CssBaseline />
            </ModalProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
};

export default MyApp;
