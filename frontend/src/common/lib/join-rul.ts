export const joinUrl = (str: string, params: { [key: string]: string }) => {
  if (Object.keys(params).length) {
    for (const key in params) {
      str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), params[key]);
    }
  }
  return str;
};
