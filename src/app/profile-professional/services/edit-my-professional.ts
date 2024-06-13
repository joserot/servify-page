import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function editMyProfessional(
  id: string,
  name?: string,
  lastName?: string,
  profession?: string,
  location?: string,
  locationService?: string,
  phone?: string,
  description?: string,
  startDay?: string,
  endDay?: string,
  startTime?: string,
  endTime?: string,
  price?: string,
  avatar?: string
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  const formData = new FormData();

  name && formData.append("name", name);
  lastName && formData.append("lastName", lastName);
  profession && formData.append("profession", profession);
  location && formData.append("location", location);
  locationService && formData.append("locationService", locationService);
  phone && formData.append("phone", phone);
  description && formData.append("description", description);
  startDay && formData.append("startDay", startDay);
  endDay && formData.append("endDay", endDay);
  startTime && formData.append("startTime", startTime);
  endTime && formData.append("endTime", endTime);
  price && formData.append("price", price);
  avatar && formData.append("avatar", avatar);

  try {
    const response: any = await axios.patch(
      API_URL + `/professionals/profile/${id}`,
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
