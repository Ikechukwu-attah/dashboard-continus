import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { truckManagementAPI } from "../../../../Authorization/ServerPaths";

export const useGetTruckManagement = () => {
  const [data, setData] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getTruckManagement = async (searchFilter) => {
    setIsLoading(true);
    try {
      const url = `${truckManagementAPI}/${searchFilter}`;
      const response = await axios.get(url);
      setIsLoading(false);
      setData(response?.data);
      const {
        data: {
          pagination: { total_pages },
        },
      } = response.data;
      setTotalPages(total_pages);
      console.log("response", response?.data);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response);
    }
  };

  return { data, isLoading, error, getTruckManagement, totalPages };
};
