"use server";

import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookies } from "next-client-cookies/server";

import recommendAdapter from "@/adapters/recommend-adapter";

export default async function getOneRecommend(id: string) {
  const cookies = getCookies();
  const token: any = cookies.get(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.get(API_URL + `/recommendations/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return recommendAdapter(response.data);
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
