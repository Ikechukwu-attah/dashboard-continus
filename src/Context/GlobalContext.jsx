import React, { createContext, useState } from "react";

export const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [pageName, setPageName] = useState("General Dashboard");
  console.log("pageName", pageName);

  return (
    <globalContext.Provider
      value={{
        pageName,
        setPageName,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
