import React, { createContext, useState } from "react";
import MapTokenToUser from "../Authorization/MapTokenToUser";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const user = MapTokenToUser();
  const [isAdmin] = useState(user.guard === "admin");
  const [pageName, setPageName] = useState(
    isAdmin ? "Client Management" : "General Dashboard"
  );
  console.log("pageName", pageName);

  return (
    <globalContext.Provider
      value={{
        pageName,
        setPageName,
        isAdmin,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
