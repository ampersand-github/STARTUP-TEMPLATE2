import { useEffect, useState } from "react";
import { API_PROFILES } from "src/common/configs/url/api-url";
import { useFetchBaseWithAuth } from "src/common/api/base/use-fetch-base-with-auth";
import { responseProfileResultDto } from "@features/profiles/interfaces/response-profile-result-dto";
import { firebaseAuth, storage } from "src/common/configs/firebase-config";
import { getDownloadURL, ref } from "@firebase/storage";

export const useAvatar = () => {
  const defaultImage = "/vercel.svg";
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const key = "profileResult";
  const url = API_PROFILES + "/result";
  const {
    data: profileResult,
    isLoading: isProfileResultLoading,
    refetch: refetchAvatar,
  } = useFetchBaseWithAuth<responseProfileResultDto>(key, url);

  useEffect(() => {
    (async () => {
      if (isProfileResultLoading) return;
      if (!profileResult?.value?.iconPath) return;
      const downLoadUrl = `users/${firebaseAuth.currentUser?.uid}/public/${profileResult.value.iconPath}`;
      const storageRef = ref(storage, downLoadUrl);
      const data = await getDownloadURL(storageRef);
      setImageUrl(data);
    })();
  }, [profileResult, isProfileResultLoading]);

  return { imageUrl, refetchAvatar };
};
