import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // todo クッキーを履きする
    console.log("破棄");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(200).json({ status: true });
};

export default handler;
