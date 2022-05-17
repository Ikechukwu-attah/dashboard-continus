import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { generalDashboardAPI } from "../../../../Authorization/ServerPaths";
export const useGetWidgets = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [widgetDropDown, setWidgetDropDown] = useState();

  const getWidgets = async (searchFilter) => {
    const url = `${generalDashboardAPI}/${searchFilter}`;
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response?.data?.data);
      setWidgetDropDown(response?.data?.data?.all_widgets);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.message);
    }
  };

  return { data, getWidgets, error, isLoading, widgetDropDown };
};
