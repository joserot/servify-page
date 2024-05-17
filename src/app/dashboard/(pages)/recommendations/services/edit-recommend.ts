import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function editRecommend(
  id: string,
  active?: boolean,
  featured?: boolean
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  try {
    const response: any = await axios.patch(
      API_URL + `/recommendations/${id}`,
      {
        active,
        featured,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
