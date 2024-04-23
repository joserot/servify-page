import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function deleteUser(id: string) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  try {
    const response: any = await axios.delete(API_URL + `/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200 || response.status === 201) {
      return response;
    }

    throw new Error();
  } catch (error: any) {
    return (
      error.response.data.message ||
      error.response.data.message[0] ||
      "Ocurrió un error"
    );
  }
}
