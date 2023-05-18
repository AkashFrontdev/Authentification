import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(JSON.parse(localToken));

  useEffect(() => {
    if (token) {
      fetch("https://reqres.in/api/check", {
        method: "GET",
        headers: {
          token: token,
        },
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          return localStorage.setItem("token", JSON.stringify(token));
        }
        else{
            setToken(null);
        }
      });
    } 
      localStorage.removeItem("token");
    
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
