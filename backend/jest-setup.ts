import { config } from "dotenv";

export default () => {
  config({ path: ".env.development" });
  process.env.TZ = "Asia/Tokyo";
};
