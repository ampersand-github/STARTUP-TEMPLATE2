import { NextPage } from "next";
import React, { Suspense } from "react";
import { WithAuth } from "@common/components/wrapper/with-auth";
import { MyPageBreadcrumb } from "@common/components/ui/my-page-bread-crumb";
import { AddressForm } from "@features/address";

const Address: NextPage = () => {
  return (
    <WithAuth>
      <MyPageBreadcrumb text={"住所"} />
      <Suspense fallback={<></>}>
        <AddressForm />
      </Suspense>
    </WithAuth>
  );
};

export default Address;
