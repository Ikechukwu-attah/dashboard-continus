import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { uploadMonthlyAvailabilityAPI } from "../../../Authorization/ServerPaths";

export const useUploadMonthlyAvailability = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const uploadMonthlyAvailability = async (data, callback, onError) => {
    try {
      setIsLoading(true);
      const response = await axios.post(uploadMonthlyAvailabilityAPI, data);
      setIsLoading(false);
      setData(response);
      if (typeof callback === "function") {
        callback();
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response);
      if (typeof onError === "function") {
        onError();
      }
    }
  };

  return { uploadMonthlyAvailability, isLoading, data, error };
};
