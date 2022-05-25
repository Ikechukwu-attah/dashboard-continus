import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { uploadBatteryAPI } from "../../../Authorization/ServerPaths";

export const useUploadBattery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const uploadBatteryData = async (data, callback, onError) => {
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
      if (typeof onError === "function") {
        onError();
      }
    }
  };

  return { uploadBatteryData, isLoading, data, error };
};
