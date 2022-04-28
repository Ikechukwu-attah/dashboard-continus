import React, { useState, useEffect } from "react";
import Dropdown from "../common/Dropdown";
import { companies } from "../../DUMMYDATA";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledText } from "../common/Basics/StyledText";
import { useGetAllCompanies } from "./hooks/useGetAllCompanies";
import { useSwitchCompany } from "./hooks/useSwitchCompany";

const Companies = () => {
  const [getCompanies, setGetCompanies] = useState([]);
  const { getAllCompany, isLoading, error, data } = useGetAllCompanies();
  const [showCompany, setShowCompany] = useState({});
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
        return data.name;
      });
      setGetCompanies(newData);
      console.log("new data ", newData);
    }
  }, [data]);

  return (
    <Dropdown
      data={getCompanies}
      name="company_name"
      label="Clients"
      showDropdown={true}
      onChange={(item) => {
        console.log("uuuuuu", item);
        const { company_name } = item;

        const data = { company_name };
        console.log("company result name", data);
        switchCompany(data);
      }}
      minWidth="30%"
      // maxWidth="100%"
    />
  );
};

export default Companies;
