import {
  API_URL,
  ACCESS_TOKEN_NAME,
  NAME_TOKEN_NAME,
} from "@/constants/constants";
import axios from "axios";
import { setCookie } from "cookies-next";

export default async function registerProfessional(
  name: string,
  lastName: string,
  email: string,
  password: string,
  profession: string,
  location: string,
  locationService: string,
  phone: string,
  price: string
) {
  try {
    const response = await axios.post(`${API_URL}/auth/register/professional`, {
      name,
      lastName,
      email,
      password,
      profession,
      location,
      locationService,
      phone,
      price,
    });

    if (response.status === 201 || response.status === 200) {
      await setCookie(ACCESS_TOKEN_NAME, response.data.token);
      await setCookie(NAME_TOKEN_NAME, "token-email");

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
