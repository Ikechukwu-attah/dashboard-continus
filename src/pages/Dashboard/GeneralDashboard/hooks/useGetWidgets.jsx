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
    console.log("uuuuuu", searchFilter);
    try {
      setIsLoading(true);
      console.log("is it working ................");
      const response = await axios.get(url);
      console.log("widget response", response?.data?.data?.widgets_to_show);
      setData(response?.data?.data);
      setWidgetDropDown(response?.data?.data?.all_widgets);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error-message", error);
      setError(error?.response?.message);
    }
  };

  return { data, getWidgets, error, isLoading, widgetDropDown };
};
