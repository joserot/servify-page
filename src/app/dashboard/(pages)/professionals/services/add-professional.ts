import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function addProfessional(
  email: string,
  name: string,
  lastName: string,
  profession: string,
  location: string,
  locationService: string,
  phone: string,
  description: string,
  verifications?: string[],
  price?: string,
  avatar?: string
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  const formData = new FormData();

  formData.append("email", email);
  formData.append("name", name);
  formData.append("lastName", lastName);
  formData.append("profession", profession);
  formData.append("location", location);
  formData.append("locationService", locationService);
  formData.append("phone", phone);
  formData.append("description", description);
  verifications?.length &&
    verifications.forEach((verification, i) => {
      formData.append(`verifications[${i}]`, verification);
    });
  price && formData.append("price", price);
  avatar && formData.append("avatar", avatar);

  try {
    const response: any = await axios.post(
      API_URL + "/professionals",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      return response;
    }

    throw new Error();
  } catch (error: any) {
    return (
      error.response.data.message ||
      error.response.data.message[0] ||
      "Ocurrió un error"
    );
  }
}
