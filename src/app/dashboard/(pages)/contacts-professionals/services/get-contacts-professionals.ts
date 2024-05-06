"use server";

import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookies } from "next-client-cookies/server";

import contactProfessionalAdapter from "@/adapters/contact-professional-adapter";

export default async function getContactsProfessionals() {
  const cookies = getCookies();
  const token: any = cookies.get(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.get(API_URL + "/contacts-professionals", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return response.data.map((contact: any) => {
        return contactProfessionalAdapter(contact);
      });
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
