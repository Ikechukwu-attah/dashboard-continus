import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { deleteClientAPI } from "../../../Authorization/ServerPaths";

export const useDeleteClient = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const deleteClient = async (data, callback) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(deleteClientAPI, { data });
      setIsLoading(false);
      setData(response?.data);
      // console.log("delete client data", response.data)

      if (callback && typeof callback === "function") {
        await callback();
      }
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
      console.log(error);
    }
  };

  return { isLoading, data, error, deleteClient };
};
