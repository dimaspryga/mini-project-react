import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const useLogin = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const config = {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };

    const payload = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        payload,
        config
      );
      console.log(response);
      setSuccess("Login Success");
      localStorage.setItem("token", response.data.token);
      setIsLogin(true);

      setTimeout(() => {
        navigate("/home");
      }, 4000);
    } catch (error) {
      console.log(error.response);
      setError("User not found.");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return { username, setUsername, password, setPassword, error, success, handleLogin, navigate };

}