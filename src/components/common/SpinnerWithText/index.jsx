import React from "react";
import { Theme } from "../../../Theme";
import { StyledDivFlex } from "../Basics/DivFlex";
import { StyledText } from "../Basics/StyledText";
import { StyledSpinning } from "../SpinningLoader/style";

const SpinnerWithText = ({ isLoading, margin, spinnerText }) => {
  return (
    <StyledDivFlex
      gap="2rem"
      justifyContent="center"
      alignItems="center"
      padding="1rem 8rem"
      margin={margin}
    >
      {isLoading && (
        <>
          <StyledSpinning speed="1s" />
          <StyledText color={Theme.colors.neutralColor2} fontSize="2.5rem">
            {spinnerText || "Loading ...."}
          </StyledText>
        </>
      )}
    </StyledDivFlex>
  );
};

export default SpinnerWithText;
