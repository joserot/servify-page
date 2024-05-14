"use server";

import { API_URL } from "@/constants/constants";
import axios from "axios";

import professionalAdapter from "@/adapters/professional-adapter";

export default async function getOneProfessional(id: string) {
  try {
    const response: any = await axios.get(API_URL + `/professionals/${id}`);

    if (response.status === 200) {
      return professionalAdapter(response.data);
    }

    throw new Error();
  } catch (error: any) {
    return null;
  }
}
