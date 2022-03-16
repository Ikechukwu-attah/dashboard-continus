import React from "react";
import { StyledDivFlex } from "../common/Basics/DivFlex";
import { StyledTextHeading } from "../common/Basics/Heading";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";
import { Theme } from "../../Theme";

const Navbar = () => {
  return (
    <StyledDivFlex
      justifyContent="flex-end"
      background={Theme.colors.neutralColor}
      gap="20rem"
      alignItems="center"
      padding="1rem 8rem "
    >
      <StyledTextHeading
        textTransform="uppercase"
        color={Theme.colors.primaryColor}
        fontWeight="600"
        fontSize="3.6rem"
        lineHeight="5.4rem"
      >
        FLEET MANAGEMENT SYSTEM
      </StyledTextHeading>
      <StyledDivFlex gap="1.5rem">
        <StyledImage
          src="/assets/7Up-logo.jpg"
          height="7.2rem"
          width="7.2rem"
          borderRadius="50%"
        />
        <StyledDivFlex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.7rem"
          >
            Ifeoluwa Olagbemi
          </StyledText>
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="400"
            lineHeight="2.7rem"
          >
            Bisedge personnel
          </StyledText>
        </StyledDivFlex>
        <StyledImage />
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default Navbar;
