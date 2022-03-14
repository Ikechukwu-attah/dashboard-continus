import React from "react";
import { Theme } from "../../Theme";
import { StyledDivFlex } from "../common/Basics/DivFlex";

const SideBar = () => {
  return (
    <StyledDivFlex
      width="20%"
      height="100vh"
      background={Theme.colors.primaryColor}
    >
      SideBar
    </StyledDivFlex>
  );
};

export default SideBar;
