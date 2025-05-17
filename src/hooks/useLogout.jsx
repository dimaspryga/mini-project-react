import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");

    navigate("/");
  }, [navigate]);

  return {
    navigate
  };
};
