import React from "react";
import { Theme } from "../../../Theme";
import { StyledBox } from "../../common/Basics/DivBox";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledText } from "../../common/Basics/StyledText";
import { StyledButton } from "../../common/Button/style";

const SubHeaderLayout = ({ buttons, text, date, count }) => {
  return (
    <StyledBox padding="1rem 8rem" background={Theme.colors.neutralColor}>
      <StyledDivFlex justifyContent="space-between">
        <StyledText
          fontSize="2.4rem"
          fontWeight="500"
          color={Theme.colors.neutralColor2}
        >
          Statistics
        </StyledText>
        {buttons}
      </StyledDivFlex>

      <StyledDivFlex justifyContent="space-between" marginTop="2rem">
        <StyledDivFlex flexDirection="column">
          <StyledText
            fontSize="1.8rem"
            fontWeight="500"
            color={Theme.colors.neutralColor2}
          >
            {text}
          </StyledText>
          <StyledText
            fontSize="1.8rem"
            fontWeight="400"
            color={Theme.colors.neutralColor2}
          >
            {date}
          </StyledText>
        </StyledDivFlex>
        <StyledText
          fontSize="1.8rem"
          fontWeight="400"
          color={Theme.colors.neutralColor2}
        >
          {count}
        </StyledText>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default SubHeaderLayout;
