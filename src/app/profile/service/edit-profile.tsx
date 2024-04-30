import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function editProfile(
  id: string,
  name?: string,
  lastName?: string,
  avatar?: string
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  const formData = new FormData();

  name && formData.append("name", name);
  lastName && formData.append("lastName", lastName);
  avatar && formData.append("avatar", avatar);

  try {
    const response: any = await axios.patch(
      API_URL + `/users/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
