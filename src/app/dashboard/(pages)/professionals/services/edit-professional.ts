import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function editProfessional(
  id: string,
  email?: string,
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
  verifications?: string[],
  price?: string,
  active?: string,
  avatar?: string,
  jobsImages?: string[]
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  const formData = new FormData();

  email && formData.append("email", email);
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
  verifications?.length &&
    verifications.forEach((verification, i) => {
      formData.append(`verifications[${i}]`, verification);
    });
  price && formData.append("price", price);
  active && formData.append("active", active);
  avatar && formData.append("avatar", avatar);

  if (jobsImages?.length) {
    for (let i = 0; i < jobsImages.length; i++) {
      formData.append(`jobsImages`, jobsImages[i]);
    }
  }

  try {
    const response: any = await axios.patch(
      API_URL + `/professionals/${id}`,
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
