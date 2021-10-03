import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const getGoogleDriveFiles = async (token) => {
  try {
    const response = await http.get(apiUrl + "drive", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getGoogleDriveFiles,
};
