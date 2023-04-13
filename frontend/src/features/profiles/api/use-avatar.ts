import { useEffect, useState } from "react";
import { ApiUrl } from "@common/configs/api-url";
import { useBaseWithAuth } from "@common/api/use-base-with-auth";
import { fireAuth, fireStorage } from "@common/configs/firebase-config";
import { getDownloadURL, ref } from "@firebase/storage";
import { QueryKey } from "@common/configs/query-key";
import { Result } from "@common/interface/result";

export const useAvatar = () => {
  const defaultImage = "/placeholder.png";
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const key = QueryKey.AVATAR_RESULT;
  const url = ApiUrl.AVATAR_RESULT;
  const { data, isLoading, refetch: refetchAvatar } = useBaseWithAuth<Result<string>>(key, url);

  useEffect(() => {
    (async () => {
      if (isLoading) return;
      if (!data?.value) {
        setImageUrl("/person.png");
        return;
      }
      const downLoadUrl = `users/${fireAuth.currentUser?.uid}/public/${data.value}`;
      const storageRef = ref(fireStorage, downLoadUrl);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    })();
  }, [data, isLoading]);

  return { imageUrl, refetchAvatar };
};
