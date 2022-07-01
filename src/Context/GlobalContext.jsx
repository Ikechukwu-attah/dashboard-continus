import React, { createContext, useState } from "react";
import WidgetProvider from "./WidgetContext";
import MapTokenToUser from "../Authorization/MapTokenToUser";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const user = MapTokenToUser();
  const [isAdmin] = useState(user.user?.data?.role === "admin");
  const [pageName, setPageName] = useState(
    isAdmin ? "Client Management" : "General Dashboard"
  );

  const [showListing, setShowListing] = useState(true);
 

  return (
    <globalContext.Provider
      value={{
        pageName,
        setPageName,
        isAdmin,
        showListing,
        setShowListing,
      }}
    >
      <WidgetProvider>{children}</WidgetProvider>
    </globalContext.Provider>
  );
};

export default GlobalProvider;
