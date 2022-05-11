import { useEffect, useState } from "react";
import axios from "../../../../Authorization/Axios";
import { getAllClientAPI } from "../../../../Authorization/ServerPaths";

export const useGetAllUsers = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [totalPages, setTotalPages] = useState(0);

  const getAllUsers = async (searchFilter) => {
    const url = `${getAllClientAPI}/${searchFilter}`;
    setIsLoading(true);
    try {
      const response = await axios.get(url);

      setData(response?.data?.data?.clients);
      // console.log("response==>data", response.data.data.clients);
      const {
        data: {
          pagination: { total_pages },
        },
      } = response?.data;
      setTotalPages(total_pages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  return { getAllUsers, useGetAllUsers, data, error, isLoading, totalPages };
};
