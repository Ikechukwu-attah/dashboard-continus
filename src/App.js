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
import jwt_decode from "jwt-decode";

import { publicRoutes, protectedRoutes } from "./Routes/Routes";
import { Login } from "@mui/icons-material";

import { ProtectedRouteGaurd, PublicRouteGaurd } from "./Routes/Gaurd";

function App() {
  // const decodedToken = jwt_decode(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWFyZCI6ImFkbWluIiwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJkYXRhIjp7ImZpcnN0bmFtZSI6ImYuYWRtaW4iLCJsYXN0bmFtZSI6ImwuYWRtaW4iLCJwaG9uZSI6IisyMzQ4MTIzNDU2Nzg5In0sImNyZWF0ZWRfYXQiOiIyMDIyLTAzLTE2VDExOjM4OjIwLjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wMy0xOFQxMzoxMTozOS4wMDBaIn0sImlhdCI6MTY0ODU2NzAyOSwiZXhwIjoxNjU2MzQzMDI5fQ.aomHJt-NGf_9jrQB3PSicJTpy5ZVYewBoYWS3e-o3Mo"
  // );

  // console.log("decodedToken", decodedToken);
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route
              path={path}
              element={<PublicRouteGaurd>{component}</PublicRouteGaurd>}
            />
          ))}
          {protectedRoutes.map(({ path, component }) => (
            <Route
              path={path}
              element={<ProtectedRouteGaurd>{component}</ProtectedRouteGaurd>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
