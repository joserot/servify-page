"use server";

import { API_URL } from "@/constants/constants";
import axios from "axios";

export default async function getRecommendsOfProfessional(
  professionalId: string
) {
  try {
    const response: any = await axios.get(API_URL + `/recommendations`, {
      params: {
        professionalId,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
