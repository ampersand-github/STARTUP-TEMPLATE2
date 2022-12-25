import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/services/constraints/themes";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import BasicLayout from "src/components/layouts/basic-layout";
import { RecoilRoot } from "recoil";
import { NextPage } from "next";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

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
        <title>テンプレートサイト</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ModalProvider rootComponent={TransitionGroup}>
            <ThemeProvider theme={theme}>
              {getLayout(<Component {...pageProps} />)}
              <CssBaseline />
            </ThemeProvider>
          </ModalProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
};

export default MyApp;
