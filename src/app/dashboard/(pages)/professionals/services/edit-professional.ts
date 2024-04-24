import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function editProfessional(
  id: string,
  email?: number,
  name?: string,
  lastName?: string,
  profession?: string,
  location?: string,
  locationService?: string,
  phone?: number,
  description?: string,
  verifications?: string[],
  price?: number,
  active?: boolean
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  try {
    const response: any = await axios.patch(
      API_URL + `/professionals/${id}`,
      {
        email,
        name,
        lastName,
        profession,
        location,
        locationService,
        phone,
        description,
        verifications,
        price,
        active,
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
    return (
      error.response.data.message ||
      error.response.data.message[0] ||
      "Ocurrió un error"
    );
  }
}
