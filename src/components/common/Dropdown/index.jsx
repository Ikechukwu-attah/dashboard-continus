import React, { useEffect, useState } from "react";
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
  multiSelect,
}) => {
  const [isOpen, setIsIOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([label]);
  console.log("dropdown value", value);
  const removeItem = (item) => {
    const allItems = [...selectedItems];
    return allItems.filter((selectedItem) => selectedItem !== item);
  };

  const getSelectedItems = (items) => {
    const allItems = items.slice(1);
    return allItems.length > 1
      ? allItems.join(",")
      : allItems.length === 1
      ? allItems[0]
      : null;
  };

  const handleChange = (item) => {
    if (!multiSelect) {
      let checkedItem;
      if (selectedItems[0] === item) {
        checkedItem = null;
      } else {
        checkedItem = item;
      }
      setSelectedItems(checkedItem === null ? [label] : [checkedItem]);
      onChange({ [name]: checkedItem });
    } else {
      if (selectedItems.includes(item)) {
        const newItemList = removeItem(item);
        setSelectedItems(newItemList);
        onChange({
          [name]: getSelectedItems(newItemList),
        });
      } else {
        const allItems = [...selectedItems];
        allItems.push(item);
        setSelectedItems(allItems);
        onChange({
          [name]: getSelectedItems(allItems),
        });
      }
    }
  };

  useEffect(() => {
    if (value) {
      setSelectedItems([value]);
    }
  }, [value]);

  console.log("selected", selectedItems);

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
        {selectedItems[0]}
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
        {data?.map((item, index) => (
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
              checked={selectedItems.includes(item)}
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
