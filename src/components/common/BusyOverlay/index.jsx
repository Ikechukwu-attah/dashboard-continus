import React from "react";
import { StyledDivFlex } from "../Basics/DivFlex";
import SpinnerWithText from "../SpinnerWithText";

const BusyOverlay = ({ spinnerText, isLoading }) => {
  return (
    <StyledDivFlex
      position="fixed"
      Left="0"
      Right="0"
      Top="0"
      Bottom="0"
      alignItems="center"
      justifyContent="center"
      display={isLoading ? "flex" : "none"}
      zIndex="10000"
      background="	rgba(0, 0, 0, 0.233)"
    >
      <SpinnerWithText
        spinnerText={spinnerText}
        isLoading={isLoading}
        margin="2rem 0 0 0"
      />
    </StyledDivFlex>
  );
};

export default BusyOverlay;
