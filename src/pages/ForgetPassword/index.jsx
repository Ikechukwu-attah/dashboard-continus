import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { StyledDivFlex } from "../../components/common/Basics/DivFlex";
import { StyledImage } from "../../components/common/Basics/StyledImage";
import { StyledTextHeading } from "../../components/common/Basics/Heading";
import { StyledInput, StyledLabel } from "../../components/common/Input";
import { StyledForm } from "../../components/common/Form/style";
import { StyledButton } from "../../components/common/Button/style";
import { StyledText } from "../../components/common/Basics/StyledText";
import { Theme } from "../../Theme";
import { StyledBox } from "../../components/common/Basics/DivBox";
import { StyledSpinning } from "../../components/common/SpinningLoader/style";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <StyledDivFlex>
      <StyledDivFlex
        flexDirection="column"
        background={Theme.colors.neutralColor}
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flex="40%"
      >
        <StyledImage src="/assets/bisedge-logo.svg" alt="bisedge logo" />
      </StyledDivFlex>
      <StyledDivFlex flex="60%" alignItems="center" justifyContent="center">
        <StyledDivFlex
          flexDirection="column"
          width="70%"
          borderRadius="1rem"
          background={Theme.colors.primaryColor}
          padding="4rem 6rem 6rem 6rem"
        >
          <StyledTextHeading
            textAlign="center"
            fontSize="3.6rem"
            fontWeight="400"
            color="#F3EFE9"
          >
            Forgot Your Password
          </StyledTextHeading>
          <StyledText textAlign="center" fontSize="1.3rem">
            You will recieve a link via email to create a new password
          </StyledText>
          <StyledForm onSubmit={handleSubmit}>
            <StyledDivFlex
              flexDirection="column"
              gap="1.5rem"
              justifyContent="center"
              marginTop="2rem"
              padding="0rem 4rem 0rem 4rem"
            >
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                  type="email"
                  placeholder="Enter your email"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                />
              </StyledDivFlex>

              <StyledButton
                padding="1.5rem"
                marginTop="2rem"
                borderRadius="5rem"
                fontSize="2.4rem"
              >
                Forgot Password
              </StyledButton>
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default ForgetPassword;
