import React, { useState } from "react";
import { StyledDivFlex } from "../Basics/DivFlex";
import { StyledText } from "../Basics/StyledText";
import DropdownArrow from "../../../Icons/DropdownArrow";
import { StyledList, StyledUl } from "../Basics/list";
import { StyledInput, StyledLabel } from "../Input";
import { Theme } from "../../../Theme";
import { useHideDropDown } from "../../../hooks/useHideDropDown";

// const data = ["Lagos", "Enugu", "Ibadan"];

const Dropdown = ({
  name,
  borderColor = "#C4C4C4",
  textColor = Theme.colors.neutralColor2,
  background = Theme.colors.neutralColor,
  label,
  Top = "4.8rem",
  onChange,
  padding = "1rem",
  data,
  gap,
  icon,
  maxWidth,
  minWidth,
  showDropdown,
  value,
}) => {
  const [isOpen, setIsIOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const handleChange = (item) => {
    let checkedItem;
    if (item === selectedItem) {
      checkedItem = null;
    } else {
      checkedItem = item;
    }
    setSelectedItem(checkedItem === null ? label : checkedItem);
    onChange({ [name]: checkedItem });
  };

  return (
    <StyledDivFlex
      position="relative"
      padding={padding}
      borderRadius="1rem"
      border={`1px solid ${borderColor}`}
      background={background}
      justifyContent="space-between"
      alignItems="center"
      // minHeight="7rem"
      // fontSize="3px"
      maxWidth={maxWidth}
      gap={gap}
      onClick={() => setIsIOpen(!isOpen)}
      // width={maxWidth}
      minWidth={minWidth}
    >
      <StyledText
        fontSize="1.8rem"
        color={textColor}
        width={`calc($maxWidth - 1rem) !important`}
        overFlow="hidden"
        textOverFlow="ellipsis"
        whiteSpace="nowrap"
        Display="block"
      >
        {selectedItem}
      </StyledText>
      {icon}

      <StyledUl
        position="absolute"
        Top={Top}
        Left="0"
        Right="0"
        background="rgba(0,0,0,0)"
        overFlow="auto"
        height="15rem"
        borderRadius="1rem"
        scale={isOpen || showDropdown ? 1 : 0}
        scrollBarWidth="0.3rem"
      >
        {data.map((item, index) => (
          <StyledList
            padding={padding}
            noHover
            borderRadius="1rem"
            background={background}
            border={`1px solid ${borderColor}`}
            color={textColor}
            display="flex"
            justifyContent="space-between"
            // minWidth={minWidth}
            alignItems="center"
            margin="0 0 .1rem 0"
            onClick={() => handleChange(item)}
          >
            <StyledLabel
              fontSize="1.8rem"
              color={textColor}
              htmlFor={item + "_" + index}
            >
              {item || value}
            </StyledLabel>
            <StyledInput
              checked={selectedItem === item}
              type="checkbox"
              scale="1.7"
              id={item + "_" + index}
            />
          </StyledList>
        ))}
      </StyledUl>
    </StyledDivFlex>
  );
};

export default Dropdown;
