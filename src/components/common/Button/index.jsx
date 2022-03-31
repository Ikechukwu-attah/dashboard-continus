import React from "react";
import { StyledDivFlex } from "../Basics/DivFlex";
import { StyledSpinning } from "../SpinningLoader/style";
import { StyledButton } from "./style";

const ButtonGroup = ({ isLoading, text }) => {
  return (
    <StyledButton
      padding="1.5rem"
      marginTop="2rem"
      borderRadius="5rem"
      fontSize="2.4rem"
    >
      <StyledDivFlex justifyContent="center" width="100%" gap="2rem">
        {isLoading && <StyledSpinning speed="1s" />}
        {text}
      </StyledDivFlex>
    </StyledButton>
  );
};

export default ButtonGroup;
