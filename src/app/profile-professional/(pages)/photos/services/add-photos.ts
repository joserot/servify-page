import { API_URL } from "@/constants/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export default async function addPhotos(
  professionalId: string,
  userId: string,
  jobsImages: any[]
) {
  const token = getCookie(ACCESS_TOKEN_NAME);

  const formData = new FormData();

  formData.append("userId", userId);

  if (jobsImages?.length) {
    for (let i = 0; i < jobsImages.length; i++) {
      formData.append(`jobsImages`, jobsImages[i]);
    }
  }

  try {
    const response: any = await axios.post(
      API_URL + `/professionals/photos/${professionalId}`,
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
