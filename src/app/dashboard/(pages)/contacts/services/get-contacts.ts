"use server";

import { API_URL, ACCESS_TOKEN_NAME } from "@/constants/constants";
import axios from "axios";

import { getCookies } from "next-client-cookies/server";

import contactAdapter from "@/adapters/contact-adapter";

export default async function getContacts() {
  const cookies = getCookies();
  const token: any = cookies.get(ACCESS_TOKEN_NAME);

  if (!token) {
    return null;
  }

  try {
    const response: any = await axios.get(API_URL + "/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return response.data.map((contact: any) => {
        return contactAdapter(contact);
      });
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
