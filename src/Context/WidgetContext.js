import React, { createContext, useEffect, useState } from "react";
import WidgetWithDropdown from "../components/Widget/WidgetWithDropdown";
import { useGetWidgets } from "../pages/Dashboard/GeneralDashboard/hooks/useGetWidgets";
import { getPreviousDate, getTodayDate } from "../utils/GetDate";

export const widgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const startDate = getPreviousDate(30);
  const endDate = getTodayDate();
  const filter = `period[start]=${startDate}
    &period[end]=${endDate}`;
  const { data, getWidgets, isLoading } = useGetWidgets();
  const [dateRange, setDateRange] = useState([]);
  const [dateFilter, setDateFilter] = useState(filter);

  useEffect(() => {
    setDateRange([startDate, endDate]);
  }, []);

  return (
    <widgetContext.Provider
      value={{
        widgetsDropdownData: data?.all_widgets,
        widgets: data,
        isLoading,
        dateFilter,
        setDateFilter,
        dateRange,
        setDateRange,
        getWidgets,
      }}
    >
      {children}{" "}
    </widgetContext.Provider>
  );
};

export default WidgetProvider;
