"use server";

import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookies } from "next-client-cookies/server";

import professionalAdapter from "@/adapters/professional-adapter";

export default async function getOneProfessional(id: string) {
  const cookies = getCookies();
  const token: any = cookies.get(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.get(API_URL + `/professionals/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return professionalAdapter(response.data);
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
