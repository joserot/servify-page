import { ACCESS_TOKEN_NAME, NAME_TOKEN_NAME } from "@/constants/constants";
import { deleteCookie } from "cookies-next";

export default async function logout() {
  await deleteCookie(ACCESS_TOKEN_NAME);
  await deleteCookie(NAME_TOKEN_NAME);

  location.reload();
}
