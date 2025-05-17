import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const useDetailUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const getUser = async () => {
    const config = {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };
    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${id}`,
        config
      );
      setUser(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  // Dummy deskripsi user
  const userDescription = `
  ${user?.first_name} is a highly motivated individual with a strong passion for technology and continuous learning. Over the years, they have contributed to various collaborative projects, consistently demonstrating excellent communication skills, adaptability, and attention to detail. Their ability to quickly grasp complex concepts and apply them in practical situations makes them a valuable member of any development team.

  Outside of work, ${user?.first_name} enjoys exploring the latest trends in web development, contributing to open-source projects, and sharing knowledge through blogs and community meetups. They are particularly interested in frontend frameworks, design systems, and user experience optimization.

  With a strong sense of responsibility and a positive mindset, ${user?.first_name} continues to grow both professionally and personally, embracing every challenge as an opportunity to improve and make an impact.
`;

  return { user, userDescription, handleBack };
};
