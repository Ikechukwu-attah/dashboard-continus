import React from "react";
import Dropdown from "../common/Dropdown";
import { companies } from "../../DUMMYDATA";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledText } from "../common/Basics/StyledText";

const Companies = () => {
  return (
    <Dropdown
      data={companies}
      name="companies"
      label="Clients"
      showDropdown={true}
      onChange={(item) => console.log("uuuuuu", item)}
      minWidth="30%"
      // maxWidth="100%"
    />
  );
};

export default Companies;
