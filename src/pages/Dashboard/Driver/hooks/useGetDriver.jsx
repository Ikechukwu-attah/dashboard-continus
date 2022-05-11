import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { driversManagmentAPI } from "../../../../Authorization/ServerPaths";

export const useGetDriver = () => {
  const [data, setData] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getDriver = async (searchFilter) => {
    const url = searchFilter
      ? `${driversManagmentAPI}/${searchFilter}`
      : driversManagmentAPI;

    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      // console.log("drivers", response.data.data.records);
      setData(response?.data?.data?.records);
      // console.log("data driver", data);
      const {
        data: {
          pagination: { total_pages },
        },
      } = response?.data;
      setTotalPages(total_pages);
    } catch (error) {
      setError(error?.response?.data?.message);
      // console.log("driver error", error.response);
    }
  };

  return { data, getDriver, isLoading, error, totalPages };
};
