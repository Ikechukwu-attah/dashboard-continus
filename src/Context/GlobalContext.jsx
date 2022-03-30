import React, { createContext, useState } from "react";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isAdmin] = useState(false);
  const [pageName, setPageName] = useState(
    isAdmin ? "User Management" : "General Dashboard"
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
