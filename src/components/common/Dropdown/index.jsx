import React, { useState } from "react";
import { StyledDivFlex } from "../Basics/DivFlex";
import { StyledText } from "../Basics/StyledText";
import DropdownArrow from "../../../Icons/DropdownArrow";
import { StyledList, StyledUl } from "../Basics/list";
import { StyledInput, StyledLabel } from "../Input";
import { Theme } from "../../../Theme";

// const data = ["Lagos", "Enugu", "Ibadan"];

const Dropdown = ({
  name,
  borderColor = "#C4C4C4",
  textColor = Theme.colors.neutralColor2,
  background = Theme.colors.neutralColor,
  label,
  onChange,
  data,
  gap,
  icon,
}) => {
  const [isOpen, setIsIOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(label);

  const handleChange = (item) => {
    const checkedItem = item === selectedItem ? "" : item;

    setSelectedItem(checkedItem);
    onChange({ [name]: checkedItem });
  };

  return (
    <StyledDivFlex
      position="relative"
      padding="2rem"
      borderRadius="1rem"
      border={`1px solid ${borderColor}`}
      background={background}
      justifyContent="space-between"
      alignItems="center"
      minHeight="7rem"
      gap={gap}
      onClick={() => setIsIOpen(!isOpen)}
    >
      <StyledText fontSize="1.8rem" color={textColor}>
        {selectedItem}
      </StyledText>
      {icon}

      <StyledUl
        position="absolute"
        Top="7rem"
        Left="0"
        Right="0"
        background="rgba(0,0,0,0)"
        overflow="hidden"
        borderRadius="1rem"
        scale={isOpen ? 1 : 0}
      >
        {data.map((item, index) => (
          <StyledList
            padding="2rem"
            noHover
            borderRadius="1rem"
            background={background}
            border={`1px solid ${borderColor}`}
            color={textColor}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            margin="0 0 .1rem 0"
            onClick={() => handleChange(item)}
          >
            <StyledLabel
              fontSize="1.8rem"
              color={textColor}
              htmlFor={item + "_" + index}
            >
              {item}
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
