import {
  API_URL,
  ACCESS_TOKEN_NAME,
  NAME_TOKEN_NAME,
} from "@/constants/constants";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

export default async function logout() {
  const token = getCookie(ACCESS_TOKEN_NAME);

  try {
    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      await deleteCookie(ACCESS_TOKEN_NAME);
      await deleteCookie(NAME_TOKEN_NAME);

      location.reload();

      return response;
    }

    throw new Error();
  } catch (error) {
    return error;
  }
}
