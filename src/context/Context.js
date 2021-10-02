import React, { useContext, useState } from "react";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //   const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [googleId, setGoogleId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    setEmail(response.profileObj.email);
    setFamilyName(response.profileObj.familyName);
    setGivenName(response.profileObj.givenName);
    setGoogleId(response.profileObj.googleId);
    setImageUrl(response.profileObj.imageUrl);
  }

  //   useEffect(async () => {
  //    setLoading(false);
  //   }, []);

  const value = {
    responseGoogle,
    email,
    familyName,
    givenName,
    googleId,
    imageUrl,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
