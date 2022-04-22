import React, { createContext, useState } from "react";
import MapTokenToUser from "../Authorization/MapTokenToUser";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const user = MapTokenToUser();
  const [isAdmin] = useState(user.user?.data?.role === "admin");
  const [pageName, setPageName] = useState(
    isAdmin ? "Client Management" : "General Dashboard"
  );

  const [showList, setShowList] = useState(true);
  console.log("pageName", pageName);

  return (
    <globalContext.Provider
      value={{
        pageName,
        setPageName,
        isAdmin,
        showList,
        setShowList,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
