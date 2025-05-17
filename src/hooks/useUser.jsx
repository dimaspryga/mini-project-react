import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getUsers = async (currentPage) => {
    const config = {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`,
        config
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return {
    users,
    searchTerm,
    setSearchTerm,
    getUsers,
    page,
    totalPages,
    handlePrev,
    handleNext,
    filteredUsers
  };
}