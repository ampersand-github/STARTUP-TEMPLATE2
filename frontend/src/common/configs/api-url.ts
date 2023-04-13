export enum ApiUrl {
  // アカウント
  ACCOUNT = "/account",

  // プロフィール
  PROFILES = "/profile",
  PROFILES_RESULT = "/profile/result",
  AVATAR_RESULT = "/profile/avatar/result",

  // アドレス
  ADDRESS = "/address",
  ADDRESS_RESULT = "/address/result",

  // 外部URL
  API_FETCH_ADDRESS = `https://zipcloud.ibsnet.co.jp/api/search?zipcode={postalCode}`,
}
