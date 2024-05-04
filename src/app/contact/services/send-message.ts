import { API_URL } from "@/constants/constants";
import axios from "axios";

export default async function sendMessage(
  email: string,
  subject: string,
  message: string
) {
  try {
    const response: any = await axios.post(API_URL + "/contacts", {
      email,
      subject,
      message,
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
