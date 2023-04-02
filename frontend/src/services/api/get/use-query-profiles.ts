import { useFetchBaseWithAuth } from "@/services/api/base/use-fetch-base-with-auth";
import { API_PROFILES } from "@/services/configs/url/api-url";

export const useFetchProfileResult = () => {
  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useFetchBaseWithAuth("profileResult", API_PROFILES + "/result");

  return { profile, isProfileLoading, profileError };
};
