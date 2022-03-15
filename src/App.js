import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GeneralDashboard from "./pages/Dashboard/GeneralDashboard";
import ClientManagment from "./pages/Dashboard/ClientManagment";
import Co2Reduction from "./pages/Dashboard/Co2Reduction";
import CompanyJournal from "./pages/Dashboard/OccupancyJournal";
import DriverManagement from "./pages/Dashboard/OccupancyJournal";
import Energy from "./pages/Dashboard/Energy";
import Maintenance from "./pages/Dashboard/Maintenance";
import MonthlyAvaliablity from "./pages/Dashboard/MonthlyAvaliablity";
import ShockingSense from "./pages/Dashboard/ShockingSensing";
import TruckUsage from "./pages/Dashboard/TruckUsage";
import UserManagement from "./pages/Dashboard/ClientManagment";
import GlobalProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<GeneralDashboard />} />
          <Route path="/client-management" element={<ClientManagment />} />
          <Route path="/co2-reduction" element={<Co2Reduction />} />
          <Route path="/occupancy-journal" element={<CompanyJournal />} />
          <Route path="/client-management" element={<ClientManagment />} />
          <Route path="/driver-management" element={<DriverManagement />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/monthly-avaliablity" element={<MonthlyAvaliablity />} />
          <Route path="/shocking-sense" element={<ShockingSense />} />
          <Route path="/truck-usage" element={<TruckUsage />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
