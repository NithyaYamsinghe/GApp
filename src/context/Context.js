import React, { useContext } from "react";
// import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //   const [loading, setLoading] = useState(true);

  //   useEffect(async () => {
  //    setLoading(false);
  //   }, []);

  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
