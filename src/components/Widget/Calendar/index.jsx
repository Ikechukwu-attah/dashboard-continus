import React, { useState } from "react";
import Calendar from "react-calendar";
import { StyledBox } from "../../common/Basics/DivBox";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledText } from "../../common/Basics/StyledText";
import WidgetMenu from "../MiniDropDown";

import "./style.css";

const CalendarCheck = ({ onRemove, onView }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <StyledDivFlex position="relative">
      <StyledDivFlex
        flexDirection="column"
        padding="3rem"
        background="#fff"
        borderRadius="2rem"
        width="100%"
        maxHeight="35rem"
      >
        <Calendar selectRange={true} onChange={onChange} value={date} />
      
      
      </StyledDivFlex>

      <StyledBox cursor="pointer" position="absolute" Top="2rem" Right="2rem">
        <WidgetMenu onRemove={onRemove} onView={onView} />
      </StyledBox>
    </StyledDivFlex>
  );
};

export default CalendarCheck;
