import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useLocalStorage("auth");
  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
