import React, { useState } from "react";
import { StyledDivFlex } from "../common/Basics/DivFlex";
import { StyledTextHeading } from "../common/Basics/Heading";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";
import { Theme } from "../../Theme";
import MapTokenToUser from "../../Authorization/MapTokenToUser";
import Profile from "../Profile/Profile";
import Companies from "../Company";
import { StyledBox } from "../common/Basics/DivBox";
import { useDropDown } from "../../hooks/useHideDropDown";

const Navbar = () => {
  const [showCompany, setShowCompany] = useState(false);
  const user = MapTokenToUser();
  console.log("user", user);
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
        FLEET MANAGEMENT SYSTEM{" "}
      </StyledTextHeading>
      <StyledDivFlex gap="1.5rem" onClick={() => setShowCompany(!showCompany)}>
        <StyledImage
          src={
            !user.user.data.avatar
              ? `${process.env.REACT_APP_BASE_URL}/${user.user.data.avatar}`
              : "/assets/7Up-logo.jpg"
          }
          height="7.2rem"
          width="7.2rem"
          borderRadius="50%"
          position="relative"
        />
        <StyledDivFlex
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
        >
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.7rem"
          >
            {user?.user?.data?.firstname}
          </StyledText>
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="400"
            lineHeight="2.7rem"
          >
            {/* Bisedge personnel */}{" "}
            {user.user.data.role === "personnel" ||
            user.user.data.role === "admin"
              ? user.user.data.role === "personnel"
                ? "Bisedge Personnel"
                : "Bisedge Admin"
              : user.user.company_id.toUpperCase()}
          </StyledText>
        </StyledDivFlex>
        <StyledBox
          position="absolute"
          Top="9rem"
          zIndex="5"
          minWidth="12%"
          Right="10rem"
          display={
            user?.user?.data?.role === "personnel" && showCompany
              ? "block"
              : "none"
          }
        >
          <Companies />
        </StyledBox>

        {/* <StyledImage /> */}
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default Navbar;
