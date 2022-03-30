import React, { useState } from "react";
import { Theme } from "../../../Theme";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import { StyledList, StyledUl } from "../../common/Basics/list";
import ThreeDots from "../../../Icons/ThreeDots";

const WidgetMenu = ({ onRemove, onView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDivFlex onClick={toggleDropdown} position="relative">
      <ThreeDots />
      {isOpen && (
        <StyledUl
          background="rgba(0,0,0,0)"
          borderRadius="1rem"
          Top=""
          Left=""
          position="absolute"
        >
          <StyledList
            border="1px solid rgba(96, 96, 96, 0.17)"
            fontSize="1.2rem"
            padding="0.5rem  6rem 0.5rem 0.5rem"
            borderRadius="0.5rem"
            background={Theme.colors.neutralColor}
            onClick={onView}
          >
            View
          </StyledList>
          <StyledList
            border="1px solid rgba(96, 96, 96, 0.17)"
            fontSize="1.2rem"
            padding="0.5rem  6rem 0.5rem 0.5rem"
            borderRadius="0.5rem"
            margin="0.2rem 0 0 0"
            background={Theme.colors.neutralColor}
            onClick={onRemove}
          >
            Remove
          </StyledList>
        </StyledUl>
      )}
    </StyledDivFlex>
  );
};

export default WidgetMenu;
