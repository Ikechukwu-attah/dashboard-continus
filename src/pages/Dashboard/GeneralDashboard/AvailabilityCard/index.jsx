import React from "react";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../../components/common/Basics/StyledText";
import WidgetMenu from "../../../../components/Widget/MiniDropDown";
import { Theme } from "../../../../Theme";
import AvailabilityGraph from "./Graph";

const AvailabilityCard = ({ width = "50%", onRemove, onView }) => {
  return (
    <StyledDivFlex
      background={Theme.colors.neutralColor}
      width={width}
      position="relative"
      boxShadow="0px 4px 4px #F3EFE9"
      borderRadius="2rem"
      padding="4rem 4rem 4rem 4rem"
      flexDirection="column"
      //   justifyContent="space-between"
      //   alignItems="center"
      //   marginTop="4rem"
    >
      <StyledBox position="absolute" Bottom="1rem" Right="4rem">
        <StyledText
          fontSize="1.8rem"
          fontWeight="400"
          color="#5F8050"
          margin="0 1rem 0 0"
          cursor="pointer"
        >
          Download report
        </StyledText>
      </StyledBox>
      <StyledBox cursor="pointer" position="absolute" Top="2rem" Right="2rem">
        <WidgetMenu onRemove={onRemove} onView={onView} />
      </StyledBox>
      <StyledText
        fontSize="2.2rem"
        color={Theme.colors.neutralColor2}
        fontWeight="400"
        margin="0 1rem 0 0"
        cursor="pointer"
      >
        Monthly Availability
      </StyledText>
      <AvailabilityGraph />
    </StyledDivFlex>
  );
};

export default AvailabilityCard;
