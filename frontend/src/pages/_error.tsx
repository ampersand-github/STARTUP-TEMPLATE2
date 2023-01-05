import React from "react";
import Custom500 from "./500";
import Custom404 from "./404";
import Custom401 from "./401";
import { AxiosError, AxiosResponse } from "axios";
import { Center } from "@/components/elements/center";

interface IError {
  statusCode: number;
}
export default function Error({ statusCode }: IError) {
  if (statusCode === 401) return <Custom401 />;
  if (statusCode === 404) return <Custom404 />;
  if (statusCode === 500) return <Custom500 />;
  return (
    <Center>
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}
      </p>
    </Center>
  );
}

Error.getInitialProps = (res: AxiosResponse, err: AxiosError) => {
  const statusCode = res ? res.status : err ? err.status : 404;
  return { statusCode };
};
