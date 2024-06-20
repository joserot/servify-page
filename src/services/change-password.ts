import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookie } from "cookies-next";

export default async function changePassword(
  currentPassword: string,
  newPassword: string
) {
  const token = await getCookie(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.post(
      API_URL + "/auth/change-password",
      {
        currentPassword,
        newPassword,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.status === 200 || response.status === 201) {
      return response;
    }

    throw new Error();
  } catch (error: any) {
    // console.log(error);

    return (
      error.response?.data?.message ||
      error.response?.data?.message[0] ||
      "Ocurrió un error"
    );
  }
}
