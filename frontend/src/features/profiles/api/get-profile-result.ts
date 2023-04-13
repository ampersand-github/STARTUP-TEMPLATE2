import { useBaseWithAuth } from "@common/api/use-base-with-auth";
import { responseProfileResultDto } from "@features/profiles/interfaces/response-profile-result-dto";
import { QueryKey } from "@common/configs/query-key";
import { ApiUrl } from "@common/configs/api-url";

export const useProfileResult = () => {
  const key = QueryKey.PROFILES_RESULT;
  const url = ApiUrl.PROFILES_RESULT;
  const {
    data: profileResult,
    isLoading: isProfileResultLoading,
    error: profileResultError,
  } = useBaseWithAuth<responseProfileResultDto>(key, url);

  return { profileResult, isProfileResultLoading, profileResultError };
};
