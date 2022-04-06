import React from "react";
import { StyledBox } from "../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../components/common/Basics/DivFlex";
import { StyledTextHeading } from "../../components/common/Basics/Heading";
import { StyledText } from "../../components/common/Basics/StyledText";
import { Theme } from "../../Theme";
import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  return (
    <StyledDivFlex flexDirection="column">
      <StyledTextHeading
        color={Theme.colors.neutralColor2}
        padding="0 0 2rem 0"
        borderBottom="2px solid #D3D3D3"
        fontSize="3rem"
      >
        Password Reset Successful
      </StyledTextHeading>
      <StyledBox
        margin="2rem 0 2rem 0"
        padding="3rem "
        background={Theme.colors.primaryColor}
      >
        <StyledText color={Theme.colors.neutralColor} fontSize="1.5rem">
          Awseome! You have successfully updated your password.
        </StyledText>
      </StyledBox>
      <StyledText color={Theme.colors.neutralColor2} fontSize="1.8rem">
        Please proceed to <Link to="/"> login</Link> with your new password
      </StyledText>
    </StyledDivFlex>
  );
};

export default PasswordResetSuccess;
