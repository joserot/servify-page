import { API_URL } from "@/constants/constants";
import axios from "axios";

export default async function createRecommendation(
  professionalId: string,
  like: boolean,
  name?: string,
  text?: string
) {
  try {
    const response: any = await axios.post(API_URL + "/recommendations", {
      professionalId,
      like,
      name,
      text,
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
