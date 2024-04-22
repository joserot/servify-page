import { API_URL } from "@/constants/constants";

export default function loginGoogle() {
  window.location.href = `${API_URL}/auth/google`;
}
