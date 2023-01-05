import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

// todo csrf対策が必要
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const idToken = req.body;

  // "POST"以外は、"404 Not Found"を返す
  if (req.method !== "POST") return res.status(404).send("Not Found");
  // データがなければ"404 Not Found"を返す
  if (!idToken) return res.status(404).send("Not Found");

  const SESSION_KEY = "session";
  const COOKIE_OPTIONS = {
    maxAge: 60 * 60 * 24, // 1日
    httpOnly: true,
    secure: true,
    path: "/",
  };
  setCookie({ res }, SESSION_KEY, idToken, COOKIE_OPTIONS);

  res.send(JSON.stringify({ status: "success" }));
}
