import { useState } from "react";
import { shockSensingBarAPI } from "../../../../Authorization/ServerPaths";
import axios from "../../../../Authorization/Axios";

export const useGetShockingSensingBarChart = () => {
  const [graphdata, setGraphData] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getShockingSensingBarChart = async (searchFilter) => {
    const url = searchFilter
      ? `${shockSensingBarAPI}/${searchFilter}`
      : shockSensingBarAPI;
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setGraphData(response?.data?.data?.records);
      setIsLoading(false);
      const {
        data: {
          pagination: { total_pages },
        },
      } = response?.data;
      setTotalPages(total_pages);
    } catch (error) {
      setError(error?.response);
    }
  };

  return {
    getShockingSensingBarChart,
    graphdata,
    error,
    isLoading,
    totalPages,
  };
};
