import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { updateWidgetAPI } from "../../../../Authorization/ServerPaths";

export const useUpdateWidget = () => {
  const [updateWidgetdata, setUpdateWidgetData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const updateWidget = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.put(updateWidgetAPI, data);
      setUpdateWidgetData(response?.data?.data?.settings);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response);
    }
  };

  return { updateWidget, updateWidgetdata, error, isLoading };
};
