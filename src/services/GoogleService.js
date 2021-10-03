import http from "./HttpService";
import { apiUrl, fileUploadUrl } from "./../config/Config.json";

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

const uploadGoogleDriveFile = async (token, file) => {
  try {
    const response = await http.post(fileUploadUrl, file, {
      headers: {
        "Content-Type": file.type,
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
  uploadGoogleDriveFile,
};
