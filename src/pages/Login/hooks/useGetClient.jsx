import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { getClientAPI } from "../../../Authorization/ServerPaths";

export const useGetClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getClient = async (id, callback) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${getClientAPI}?id=${id}`);
      setIsLoading(false);
      const { email, company_id, data } = response?.data?.data?.clients[0];

      const clientData = { email, company_id, ...data };
      delete clientData?.guard;
      // console.log("client datattt", clientData)
      // console.log("item to edit =>>", clientData);
      setData(clientData);
      if (callback && typeof callback === "function") {
        callback(clientData);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  return { isLoading, data, getClient, error };
};
