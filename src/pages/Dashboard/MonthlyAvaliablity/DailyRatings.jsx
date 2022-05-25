import React from "react";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { Theme } from "../../../Theme";

const DailyRating = ({ count, label }) => {
  return (
    <StyledBox
      // padding="5rem"
      background={Theme.colors.neutralColor5}
      minWidth="30%"
      minWidthS="50%"
    >
      <StyledText
        fontSize="calc(1.5rem + 0.5vw)"
        fontWeight="500"
        padding="2rem 0 0 2rem"
        Display="inline-block"
        color={Theme.colors.primaryColor}
      >
        {/* 28 days (672 Hours) */}

        {/* {`${summary?.total_days ? summary?.total_days : 0} days   (${
        summary?.total_uptime_hours ? summary?.total_uptime_hours : 0
      } Hours)`} */}

        {count}
      </StyledText>
      <StyledDivFlex padding="4rem 0rem 2rem 0rem" justifyContent="flex-end">
        <StyledText
          fontSize="calc(1.5rem + 0.5vw)"
          fontWeight="400"
          color={Theme.colors.primaryColor}
          padding="0 2rem 0rem 0rem"
        >
          {label}
        </StyledText>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default DailyRating;
