import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../common/Dropdown";
import { companies } from "../../DUMMYDATA";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledText } from "../common/Basics/StyledText";
import { useGetAllCompanies } from "./hooks/useGetAllCompanies";
import { useSwitchCompany } from "./hooks/useSwitchCompany";
import jsCookie from "js-cookie";

const Companies = () => {
  const [getCompanies, setGetCompanies] = useState([]);
  const { getAllCompany, isLoading, error, data } = useGetAllCompanies();
  // const [showCompany, setShowCompany] = useState({});
  const {
    switchCompany,
    data: switchCompanyData,
    error: switchCompanyError,
    isLoading: switchCompanyIsLoading,
  } = useSwitchCompany();

  console.log("company names", getCompanies);
  useEffect(() => {
    getAllCompany();
  }, []);

  console.log("response data", data);

  useEffect(() => {
    if (data) {
      console.log("checking ooooooooooooooooooo");
      const newData = data.map((data) => {
        return data?.name;
      });
      setGetCompanies(newData);
      console.log("new data ", newData);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleLogOut = (event) => {
    console.log("loged out");
    event?.preventDefault();
    jsCookie.remove("userToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <Dropdown
      data={getCompanies}
      name="company_name"
      label="Clients"
      showDropdown={true}
      onChange={(item) => {
        console.log("sirk", item);
        const { company_name } = item;
        console.log("james");
        const data = { company_name };
        console.log("james");
        console.log("company result name", data);
        switchCompany(data, handleLogOut);
      }}
      minWidth="30%"

      // maxWidth="100%"
    />
  );
};

export default Companies;
