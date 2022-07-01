import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../common/Dropdown";
import { companies } from "../../DUMMYDATA";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledText } from "../common/Basics/StyledText";
import { useGetAllCompanies } from "./hooks/useGetAllCompanies";
import { useSwitchCompany } from "./hooks/useSwitchCompany";
import jsCookie from "js-cookie";
import { StyledDivFlex } from "../common/Basics/DivFlex";

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

  useEffect(() => {
    getAllCompany();
  }, []);


  useEffect(() => {
    if (data) {
      const newData = data.map((data) => {
        return data?.name;
      });
      setGetCompanies(newData);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event?.preventDefault();
    jsCookie.remove("userToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <StyledDivFlex  widthS="100%" >
       <Dropdown
      data={getCompanies}
      name="company_name"
      label="Clients"
   
      showDropdown={true}
      onChange={(item) => {
        const { company_name } = item;
        const data = { company_name };
        switchCompany(data, handleLogOut);

      }}
      widthS="100%"
      gapS="2rem"
      minWidth="70%"

    />
    </StyledDivFlex> 
   
  );
};

export default Companies;
