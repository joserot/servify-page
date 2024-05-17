"use server";

import { API_URL } from "@/constants/constants";
import axios from "axios";

import recommendAdapter from "@/adapters/recommend-adapter";

export default async function getRecommendsOfProfessional(
  professionalId: string
) {
  try {
    const response: any = await axios.get(
      API_URL + `/recommendations/professional/${professionalId}`
    );

    if (response.status === 200) {
      return response.data.map((r: any) => {
        return recommendAdapter(r);
      });
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
