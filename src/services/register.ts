import {
  API_URL,
  ACCESS_TOKEN_NAME,
  NAME_TOKEN_NAME,
} from "@/constants/constants";
import axios from "axios";
import { setCookie } from "cookies-next";

interface Props {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export default async function register({
  name,
  lastName,
  email,
  password,
}: Props) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      lastName,
      email,
      password,
    });

    if (response.status === 201) {
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
