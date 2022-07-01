import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { monthlyAvaliablityAPI } from "../../../../Authorization/ServerPaths";

export const useMonthlyAvaliablity = () => {
  const [data, setData] = useState();
  const [summary, setSummary] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getMonthlyAvaliablity = async (searchFilter) => {
    const url = `${monthlyAvaliablityAPI}/${searchFilter}`;
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);

      setData(response?.data?.data?.records);
      setSummary(response?.data?.data?.summary[0]);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return { data, getMonthlyAvaliablity, isLoading, error, summary };
};
