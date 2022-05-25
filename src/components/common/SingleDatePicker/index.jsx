import React from "react";
import { DatePicker } from "rsuite";
import styled from "styled-components";
import {
  largeDevice,
  mediumDevice,
  smallDevice,
  veryLargeDevice,
} from "../../../constants/MediaQuery/MediaQuery";
import { Theme } from "../../../Theme";

const StyledDatePicker = styled(DatePicker)`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: white;
  border: ${({ border }) => border};
  outline: none;
  /* width: 100%; */

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

  ${veryLargeDevice}
  ${largeDevice}
  ${mediumDevice}
  ${smallDevice}
`;

const SingleDatePicker = ({ onChange, widthS }) => {
  const handleChange = (dates) => {
    onChange(dates);
  };
  return (
    <StyledDatePicker
      size="lg"
      placeholder="Select Date"
      style={{ width: 200 }}
      widthS={`${widthS} !important`}
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
