import { useFetchBaseWithAuth } from "src/common/api/base/use-fetch-base-with-auth";
import { API_PROFILES } from "src/common/configs/url/api-url";
import { responseProfileResultDto } from "src/features/profiles/interfaces/response-profile-result-dto";

export const useFetchProfileResult = () => {
  const key = "profileResult";
  const url = API_PROFILES + "/result";
  const {
    data: profileResult,
    isLoading: isProfileResultLoading,
    error: profileResultError,
  } = useFetchBaseWithAuth<responseProfileResultDto>(key, url);

  return { profileResult, isProfileResultLoading, profileResultError };
};
