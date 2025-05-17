import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Password do not match.");
      return;
    }

    const config = {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        {
          email: username,
          password: password,
        },
        config
      );

      console.log("Register success:", response.data);
      setSuccess("Register Success");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return { username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, handleRegister, error, success };
}