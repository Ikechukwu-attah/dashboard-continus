import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { truckUsageAPI } from "../../../../Authorization/ServerPaths";

export const useGetTruckUsage = () => {
  const [data, setData] = useState();
  // const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getTruckUsage = async (searchFilter) => {
    const url = searchFilter
      ? `${truckUsageAPI}/${searchFilter}`
      : truckUsageAPI;

    setIsLoading(true);
    try {
      const response = await axios.get(url);

      setIsLoading(false);
      setData(response?.data?.data?.records);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return { data, getTruckUsage, isLoading, error };
};
