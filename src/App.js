import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Redire,
  useNavigate,
} from "react-router-dom";
import GlobalProvider from "./Context/GlobalContext";
import DropdownFilterProvider from "./Context/DropdownFiltersContext";
import jwt_decode from "jwt-decode";

import { publicRoutes, protectedRoutes } from "./Routes/Routes";
import { Login } from "@mui/icons-material";

import { PublicRouteGaurd, AdminGuard, ClientGuard } from "./Routes/Gaurd";

function App() {
  
  return (
    <GlobalProvider>
      <DropdownFilterProvider>
        <BrowserRouter>
          <Routes>
            {" "}
            {publicRoutes.map(({ path, component }) => (
              <Route
                path={path}
                element={<PublicRouteGaurd> {component} </PublicRouteGaurd>}
              />
            ))}{" "}
            {protectedRoutes.admin.map(({ path, component }) => (
              <Route
                path={path}
                element={<AdminGuard> {component} </AdminGuard>}
                exact={true}
              />
            ))}
            {protectedRoutes.client.map(({ path, component }) => (
              <Route
                path={path}
                element={<ClientGuard> {component} </ClientGuard>}
                exact={true}
              />
            ))}
          </Routes>{" "}
        </BrowserRouter>{" "}
      </DropdownFilterProvider>{" "}
    </GlobalProvider>
  );
}

export default App;
