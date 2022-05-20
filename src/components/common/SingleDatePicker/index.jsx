import React from "react";
import { DatePicker } from "rsuite";
import styled from "styled-components";
import { Theme } from "../../../Theme";

const StyledDatePicker = styled(DatePicker)`
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

const SingleDatePicker = ({ onChange }) => {
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
      selectRange="false"
    />
  );
};

export default SingleDatePicker;
