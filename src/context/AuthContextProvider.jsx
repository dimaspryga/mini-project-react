// context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogin(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
