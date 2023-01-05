export interface IVerifiedStateResponseDto {
  isVerify: boolean;
  isEmailVerified: boolean;
}

export const verifiedStateResponseDto = (
  isVerify: boolean,
  isEmailVerified: boolean
): IVerifiedStateResponseDto => {
  return {
    isVerify: isVerify,
    isEmailVerified: isEmailVerified,
  };
};
