import React, { useState } from "react";
import Calendar from "react-calendar";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledText } from "../../common/Basics/StyledText";
// import "react-calendar/dist/Calendar.css";
import "./style.css";

const CalendarCheck = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <StyledDivFlex justifyContent="flex-end" marginTop="2rem">
      <StyledDivFlex
        flexDirection="column"
        padding="3rem"
        background="#fff"
        borderRadius="2rem"
        width="25%"
      >
        <Calendar selectRange={true} onChange={onChange} value={date} />
        {console.log("date", date)}
        <StyledText color="black">{date.toString()}</StyledText>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default CalendarCheck;
