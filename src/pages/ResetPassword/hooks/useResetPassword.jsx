import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { resetPasswordAPI } from "../../../Authorization/ServerPaths";

export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const resetPassword = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(resetPasswordAPI, data);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  return { resetPassword, data, isLoading, error };
};
