import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem("token");


    navigate("/");
  }, [navigate]);

  return <p>Logout Success</p>;
};

export default LogoutPage;