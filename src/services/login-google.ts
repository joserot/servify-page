import { API_URL } from "@/constants/constants";
import { setCookie } from "cookies-next";

export default async function loginGoogle(
  location?: string,
  service?: string,
  id?: string
) {
  if (location && service && id) {
    await setCookie("last_location", location);
    await setCookie("last_service", service);
    await setCookie("last_id", id);
  }

  window.location.href = `${API_URL}/auth/google`;
}
