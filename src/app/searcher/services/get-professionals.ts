"use server";

import { API_URL } from "@/constants/constants";
import axios from "axios";

import professionalAdapter from "@/adapters/professional-adapter";

export default async function getProfessionals() {
  try {
    const response: any = await axios.get(API_URL + "/professionals");

    if (response.status === 200) {
      return response.data.map((professional: any) => {
        return professionalAdapter(professional);
      });
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
