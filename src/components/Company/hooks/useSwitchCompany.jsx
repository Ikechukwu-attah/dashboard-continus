import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { switchCompanyAPI } from "../../../Authorization/ServerPaths";

export const useSwitchCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const switchCompany = async (data, callback) => {
    setIsLoading(true);
    try {
      const response = await axios.post(switchCompanyAPI, data);
      if (callback && typeof callback === "function") {
        callback();
      }
    
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response);
    }
  };

  return { switchCompany, error, isLoading, data };
};
