import React, { useContext, useEffect } from "react";
import AuthService from "../services/AuthService";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // set auth code
  async function setAuthCode(code) {
    const res = await AuthService.getAuthCode(code);
    console.log(res);
    return res;
  }

  // const [email, setEmail] = useState("");
  // const [familyName, setFamilyName] = useState("");
  // const [givenName, setGivenName] = useState("");
  // const [googleId, setGoogleId] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  // function responseGoogle(response) {
  //   console.log(response);
  //   console.log(response.profileObj);
  //   setEmail(response.profileObj.email);
  //   setFamilyName(response.profileObj.familyName);
  //   setGivenName(response.profileObj.givenName);
  //   setGoogleId(response.profileObj.googleId);
  //   setImageUrl(response.profileObj.imageUrl);
  // }

  // useEffect(async () => {

  // }, []);

  const value = {
    // email,
    // familyName,
    // givenName,
    // googleId,
    // imageUrl,
    setAuthCode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
