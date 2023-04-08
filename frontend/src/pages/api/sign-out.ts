import { revokeRefreshTokens } from "@common/configs/firebase-admin-config";
import { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie, parseCookies } from "nookies";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // "DELETE"以外は、"404 Not Found"を返す
    if (req.method !== "DELETE") return res.status(404).send("Not Found");

    destroyCookie({ res }, "token", { path: "/" });
    const tokenId = parseCookies({ req }).token || "";
    await revokeRefreshTokens(tokenId);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(201).json({ status: true });
};

export default handler;
