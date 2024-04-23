"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateUrl(url: string) {
  revalidateTag(url);
}
