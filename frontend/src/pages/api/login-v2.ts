import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

// todo csrf対策が必要
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // "POST"以外は、"404 Not Found"を返す
    if (req.method !== "POST") return res.status(404).send("Not Found");

    // データがなければ"404 Not Found"を返す
    const idToken = req.body;
    if (!idToken) return res.status(404).send("Not Found");

    // クッキー設定
    const SESSION_KEY = "token";
    const COOKIE_OPTIONS = {
      maxAge: 60 * 60 * 24, // 1日
      httpOnly: true,
      secure: true, // set this to false in local (non-HTTPS) development // todo 開発環境ならfalseにする
      path: "/",
      overwrite: true,
      sameSite: "strict",
      signed: true,
    };
    setCookie({ res }, SESSION_KEY, idToken, COOKIE_OPTIONS);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(200).json({ status: true });
};

export default handler;
