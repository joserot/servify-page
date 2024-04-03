import axios from "axios";

export default async function getLocations() {
  try {
    const response: any = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input: "virasoro",
          region: "ar",
          key: "AIzaSyBiTfxPo1slEezYRJ2a5PF6_82RLfkExzE",
        },
      }
    );

    return response;

    if (response.status === 200) {
      return response;
    }

    throw new Error();
  } catch (error: any) {
    return error;
  }
}
