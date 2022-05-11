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
      // console.log("monthlyAvaliablity ", response.data.data.records);

      console.log("james", response?.data?.data?.summary[0]?.total_days);
      setData(response?.data?.data?.records);
      setSummary(response?.data?.data?.summary[0]);
      // console.log("data driver", data);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return { data, getMonthlyAvaliablity, isLoading, error, summary };
};
