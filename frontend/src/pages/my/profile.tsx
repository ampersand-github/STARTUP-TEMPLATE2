import { useAuth } from "src/services/hooks/use-auth";
import React, { ChangeEvent, useState } from "react";
import { IProfile, ProfileTemplate } from "@/components/templates/my/profie-template";
import { UseQueryProfiles } from "@/services/hooks/api/use-query-profiles";
import { Loading } from "@/components/organisms/loading";
import { GetServerSideProps, NextPage } from "next";
import Custom500 from "@/pages/500";

// propsの型を定義する
type IItem = {
  title: string;
  num: number;
};

interface IProfileSSR {
  props: IItem;
}

const Profile: NextPage<IProfileSSR> = ({ props }: IProfileSSR) => {
  const _props: IItem = props;
  const { isUserLoading } = useAuth();
  const [image, setImage] = useState<File>();
  const { data: profile, isFetching, error } = UseQueryProfiles();
  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(image);
      // todo リサイズ処理？？？
      // todo 画像アップロード処理
    }
  };

  if (isUserLoading || isFetching) return <Loading />;
  if (error?.response) return <Custom500 />;
  return (
    <>
      <h2>aaa:{_props.title}</h2>
      <ProfileTemplate profile={profile as IProfile} onUpload={onUpload} />
    </>
  );
};

// サーバサイドで実行する処理(getServerSideProps)を定義する
export const getServerSideProps: GetServerSideProps<IItem> = async () => {
  // プロフィールの取得
  // const idToken = nookies.get(context).session;
  // const mayBeProfile = await axios.get("/profile/may-be", await axiosConfig(idToken));
  // console.log("mayBeProfile.data", mayBeProfile);

  const item: IItem = {
    title: "test",
    num: 123,
  };

  return { props: item };
};

export default Profile;
