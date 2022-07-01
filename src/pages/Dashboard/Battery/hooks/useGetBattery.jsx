import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { batteryEnergyAPI } from "../../../../Authorization/ServerPaths";

export const useGetBattery = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getBattery = async (searchFilter) => {
    const url = `${batteryEnergyAPI}/${searchFilter}`;

    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response?.data?.data?.records);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response);
    }
  };
  return { getBattery, isLoading, data, error };
};
