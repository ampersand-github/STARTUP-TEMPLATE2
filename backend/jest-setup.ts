import { config } from "dotenv";

export default () => {
  config({ path: ".env" });
  process.env.TZ = "Asia/Tokyo";
};
