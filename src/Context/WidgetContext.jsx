import React, { createContext, useEffect, useState } from "react";
import WidgetWithDropdown from "../components/Widget/WidgetWithDropdown";
import { useGetWidgets } from "../pages/Dashboard/GeneralDashboard/hooks/useGetWidgets";
import MapTokenToUser from "../Authorization/MapTokenToUser";

export const widgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const year = new Date().getFullYear();
  const date1 = `${year}-01-01`;
  const date2 = `${year}-12-31`;
  const startDate = date1;
  const endDate = date2;


  const user = MapTokenToUser();
 
  const [companyId, setCompanyId] = useState(user?.user?.Company?.id);



  const filter = `period[start]=${startDate}
    &period[end]=${endDate}$`
  


  const { data, getWidgets, isLoading } = useGetWidgets();
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [dateFilter, setDateFilter] = useState(filter);

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
        data,
        date1,
        date2,
        companyId,
        setCompanyId
      }}
    >
      {children}{" "}
    </widgetContext.Provider>
  );
};

export default WidgetProvider;
