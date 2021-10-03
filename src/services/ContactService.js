import http from "./HttpService";
import { contactUrl } from "./../config/Config.json";

const getAllContacts = async (token) => {
  try {
    const response = await http.get(contactUrl, {
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
  getAllContacts,
};
