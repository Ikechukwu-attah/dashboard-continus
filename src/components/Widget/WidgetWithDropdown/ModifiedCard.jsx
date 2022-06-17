import React, { useContext } from "react";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import WidgetWithDropDown from "../WidgetWithDropdown/index";
import { StyledCircle } from "../../common/Basics/Circle";
import { Theme } from "../../../Theme";
import { StyledBox } from "../../common/Basics/DivBox";
import { StyledText } from "../../common/Basics/StyledText";
import { widgetContext } from "../../../Context/WidgetContext";

const ModifiedCard = ({ label, count, thresholdCount, onRemove, report }) => {
  const { widgets, widgetsDropdownData } = useContext(widgetContext);
  return (
    <StyledBox>
      <WidgetWithDropDown
        borderBottomRight="1px"
        borderBottomLeft="1px"
        label="Co2 Reduction"
        top="28.3rem"
        // bottom="10rem"
        count={count}
        onRemove={onRemove}
        report={report}
      />
      <StyledDivFlex
        background={Theme.colors.neutralColor}
        width="100%"
        boxShadow="0px 4px 4px #F3EFE9"
        borderTop="2px #027351 dotted"
        alignItems="center"
        // borderRadius="1rem"
        padding="1rem 4rem 4rem 4rem"
        borderBRR="2rem"
        borderBLR="2rem"
        justifyContent="space-between"
      >
        <StyledCircle background="rgba(2, 115, 81, 0.2)" color="#027351">
          {thresholdCount}
        </StyledCircle>
        <StyledText color="#000">{label}</StyledText>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default ModifiedCard;
