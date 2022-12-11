export const sleep = async (second: number) => {
  const _second = second * 1000; // 秒に変換
  await new Promise((resolve) => setTimeout(resolve, _second));
};
