import React from "react";
import { Theme } from "../../../Theme";
import { StyledBox } from "../../common/Basics/DivBox";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledText } from "../../common/Basics/StyledText";
import { StyledButton } from "../../common/Button/style";

const SubHeaderLayout = ({ buttons, text, dateRange = [], count }) => {
  const [date1, date2] = dateRange;

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (date) {
      const dates = new Date(date.toString());
      const day = dates.getDate();
      const month = months[dates.getMonth()];
      const year = dates.getFullYear();
      return `${day} ${month}, ${year}`;
    }
  };

  console.log("formated date", formatDate(date1));

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
            {dateRange?.length
              ? `${formatDate(date1)} - ${formatDate(date2)}`
              : null}
          </StyledText>
        </StyledDivFlex>
        <StyledText
          fontSize="1.8rem"
          fontWeight="400"
          color={Theme.colors.neutralColor2}
        >
          {count ? `${count} Truck${count > 1 ? "s" : ""}` : ""}
        </StyledText>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default SubHeaderLayout;
