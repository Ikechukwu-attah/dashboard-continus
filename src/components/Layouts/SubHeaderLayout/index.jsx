import React from "react";
import { Theme } from "../../../Theme";
import { StyledBox } from "../../common/Basics/DivBox";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledText } from "../../common/Basics/StyledText";
import { StyledButton } from "../../common/Button/style";
import { formatDate } from "../../../utils/FormatDate";

const SubHeaderLayout = ({
  buttons,
  text,
  dateRange = [],
  count,
  data,
  showYear,
}) => {
  const [date1, date2] = dateRange ? dateRange : [];


  return (
    <StyledBox
      padding="1rem 8rem"
      background={Theme.colors.neutralColor}
      paddingS="2rem"
    >
      <StyledDivFlex justifyContent="space-between">
        <StyledText
          fontSize="calc(1rem + 0.85vw)"
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
            fontSize="calc(1rem + 0.85vw)"
            fontWeight="500"
            color={Theme.colors.neutralColor2}
          >
            {text}
          </StyledText>
          <StyledText
            fontSize="calc(1rem + 0.85vw)"
            fontWeight="400"
            color={Theme.colors.neutralColor2}
          >
            {showYear
              ? `Year ${showYear}`
              : dateRange?.length
              ? date1 && date2 && date1 === date2
                ? formatDate(date1)["dd/month/yyyy"]
                : `${formatDate(date1)["dd/month/yyyy"]} - ${
                    formatDate(date2)["dd/month/yyyy"]
                  }`
              : ""}
          </StyledText>
        </StyledDivFlex>
        <StyledText
          fontSize="1.8rem"
          fontWeight="400"
          color={Theme.colors.neutralColor2}
        >
          {/* {count ? `${count} Truck${count > 1 ? "s" : ""}` : ""} */}
        </StyledText>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default SubHeaderLayout;
