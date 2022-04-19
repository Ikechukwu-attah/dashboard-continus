import React from "react";
import { Theme } from "../../Theme";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledDivFlex } from "../common/Basics/DivFlex";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";
import { StyledButton } from "../common/Button/style";
import MapTokenToUser from "../../Authorization/MapTokenToUser";

const Profile = () => {
  const user = MapTokenToUser();
  console.log("userMapped", user);
  return (
    <StyledBox
      //   width="100%"
      background={Theme.colors.neutralColor}
      position="absolute"
      Top="9rem"
      zIndex="2"
      minWidth="15%"
    >
      <StyledDivFlex
        background={Theme.colors.secondaryColor}
        justifyContent="center"
        alignItems="center"
        padding="2rem 0 1rem 0"
        flexDirection="column"
      >
        <StyledImage
          src={user.user?.data?.avatar}
          width="12.2rem"
          height="12.2rem"
          borderRadius="50%"
        />
        <StyledText
          color={Theme.colors.neutralColor2}
          fontSize="1.8rem"
          display="inline-block"
          padding="1rem 0 0 0"
        >
          {user?.user?.data?.firstname}
        </StyledText>
      </StyledDivFlex>

      <StyledDivFlex flexDirection="column" padding="2rem">
        <StyledDivFlex flexDirection="column" padding="0.5rem 0 0 0">
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="500"
          >
            Username:
          </StyledText>
          <StyledText color={Theme.colors.neutralColor2} fontSize="1.5rem">
            ADS9087654
          </StyledText>
        </StyledDivFlex>

        <StyledDivFlex flexDirection="column" padding="0.5rem 0 0 0">
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="500"
          >
            Email:
          </StyledText>
          <StyledText color={Theme.colors.neutralColor2} fontSize="1.5rem">
            {user?.user?.email}
          </StyledText>
        </StyledDivFlex>

        <StyledDivFlex flexDirection="column" padding="0.5rem 0 0 0">
          <StyledText
            color={Theme.colors.neutralColor2}
            fontSize="1.8rem"
            fontWeight="500"
          >
            Phone:
          </StyledText>
          <StyledText color={Theme.colors.neutralColor2} fontSize="1.5rem">
            {user?.user?.data?.phone}
          </StyledText>
        </StyledDivFlex>

        <StyledDivFlex justifyContent="flex-end" padding="2rem  0 0 0">
          <StyledButton
            background="rgba(255, 29, 29, 0.5)"
            color={Theme.colors.neutralColor}
            padding=" 0.5rem 1.5rem 0.5rem 1.5rem"
            borderRadius="10px"
          >
            Delete
          </StyledButton>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledBox>
  );
};

export default Profile;
