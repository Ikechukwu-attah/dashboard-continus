import React, { useContext } from "react";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { globalContext } from "../../../Context/GlobalContext";
import { StyledTextHeading } from "../../common/Basics/Heading";
import { Theme } from "../../../Theme";

const PageHeaderLayout = ({ children }) => {
  const { pageName } = useContext(globalContext);
  return (
    <StyledDivFlex
      justifyContent="space-between"
      padding="2rem 8rem"
      background={Theme.colors.neutralColor}
      marginTop="1rem"
      alignItems="center"
      paddingS="0 1rem 0 1rem"
      marginS="1.5rem 0 0 0"
    >
      <StyledTextHeading
        color={Theme.colors.primaryColor}
        fontSize="calc(1rem + 1.63vw)"
        fontWeight="500"
      >
        {pageName}
      </StyledTextHeading>

      {children}
    </StyledDivFlex>
  );
};

export default PageHeaderLayout;
