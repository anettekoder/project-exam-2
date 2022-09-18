// import { createContext, useState } from "react";

// const AuthContext = createContext({
//   user: null,
//   login: () => {},
//   logout: () => {},
//   authReady: false,
// });

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState(null);
//   return (
//     <AuthContext.Provider value={[user, setUser]}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth");
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
