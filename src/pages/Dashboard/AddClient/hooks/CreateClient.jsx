import { useState } from "react";

import axios from "../../../../Authorization/Axios";
import cookie from "js-cookie";
import { createClientAPI } from "../../../../Authorization/ServerPaths";

export const useCreateClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const createClient = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(createClientAPI, data);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return { createClient, data, isLoading, error };
};
