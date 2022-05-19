import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { uploadBatteryAPI } from "../../../Authorization/ServerPaths";

export const useUploadBattery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const uploadBatteryData = async (data, callback) => {
    try {
      setIsLoading(true);
      const response = await axios.post(uploadBatteryAPI, data);
      setIsLoading(false);
      setData(response);
      if (typeof callback === "function") {
        callback();
      }
    } catch (error) {
      setIsLoading(false);

      setError(error.response);
    }
  };

  return { uploadBatteryData, isLoading, data, error };
};
