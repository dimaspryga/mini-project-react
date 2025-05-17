import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      setIsLogin(false);
      navigate("/");
    }, 2000);
  };

  return { isLogin, handleLogout };
};
