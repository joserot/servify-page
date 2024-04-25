"use server";

import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookies } from "next-client-cookies/server";

import professionalAdapter from "@/adapters/professional-adapter";

export default async function getProfessionals() {
  const cookies = getCookies();
  const token: any = cookies.get(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.get(API_URL + "/professionals/all", {
      headers: { Authorization: `Bearer ${token}` },
    });

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
