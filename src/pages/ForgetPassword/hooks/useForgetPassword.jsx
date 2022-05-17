import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { forgetPasswordAPI } from "../../../Authorization/ServerPaths";

export const useForgetPassword = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const forgetPassword = async (data) => {
    setIsLoading(true);
    try {
      const response = axios.post(forgetPasswordAPI, data);
      setIsLoading(false);
      setData(response?.data);
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data?.error?.message);
    }
  };

  return { error, forgetPassword, data, isLoading };
};
