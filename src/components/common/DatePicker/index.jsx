import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import { StyledBox } from "../Basics/DivBox";
import "rsuite/dist/rsuite.min.css";
import { Theme } from "../../../Theme";

import styled from "styled-components";
import { StyledText } from "../Basics/StyledText";

const StyledDatePicker = styled(DateRangePicker)`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: white;
  border: ${({ border }) => border};
  outline: none;

  & div {
    border-color: none;
  }

  & div[role="combobox"] {
    outline: none !important;
    border: none !important;

    &:focus-within {
      outline: none !important;
      border: none !important;
    }
  }

  & input {
    outline: none !important;
    border: none !important;
  }
`;
const PickDate = ({ onChange }) => {
  const handleChange = (dates) => {
    onChange(dates);
  };
  return (
    <StyledDatePicker
      size="lg"
      placeholder="Select Date"
      style={{ width: 200 }}
      padding="0.5rem"
      borderRadius="1rem"
      //   border="2px solid #C4C4C4"
      background={Theme.colors.neutralColor}
      placement="bottomEnd"
      onChange={handleChange}
    />
  );
};

export default PickDate;
