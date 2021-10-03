import React, { useContext, useState } from "react";
import AuthService from "../services/AuthService";
import GoogleService from "../services/GoogleService";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [picture, setPicture] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  // set auth code
  async function setAuthCode(code) {
    const response = await AuthService.getAuthCode(code);
    const data = response.data;
    setEmail(data.user_profile.email);
    setFamilyName(data.user_profile.family_name);
    setGivenName(data.user_profile.given_name);
    setName(data.user_profile.name);
    setPicture(data.user_profile.picture);
    setVerifiedEmail(data.user_profile.verified_email);
    setAccessToken(data.tokens.access_token);
    setRefreshToken(data.tokens.refresh_token);

    console.log(response);
    return response;
  }

  async function getGoogleDrive() {
    const response = await GoogleService.getGoogleDriveFiles(accessToken);
    console.log(response);
    return response;
  }

  const value = {
    email,
    name,
    familyName,
    givenName,
    picture,
    verifiedEmail,
    accessToken,
    refreshToken,
    setAuthCode,
    getGoogleDrive,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
