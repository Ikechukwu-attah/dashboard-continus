import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import GeneralDashboard from "./pages/Dashboard/GeneralDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<GeneralDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
