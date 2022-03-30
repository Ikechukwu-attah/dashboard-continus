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
import TogglePassword from "../../components/TogglePassword";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const [icons, InputType] = TogglePassword();
  return (
    <StyledDivFlex>
      <StyledDivFlex
        flexDirection="column"
        background={Theme.colors.neutralColor}
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flex="40%"
        backgroundImage={`url('./assets/lift.png')`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      >
        <StyledImage src="/assets/bisedge-logo1.png" alt="bisedge logo" />
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
            Reset Your Password
          </StyledTextHeading>
          <StyledForm onSubmit={handleSubmit}>
            <StyledDivFlex
              flexDirection="column"
              gap="1.5rem"
              justifyContent="center"
              marginTop="2rem"
              padding="0rem 4rem 0rem 4rem"
            >
              <StyledDivFlex
                flexDirection="column"
                gap="1rem"
                postion="relative"
              >
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                  type={InputType}
                  placeholder="Enter password"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                />
                <StyledText
                  position="absolute"
                  color="#606060"
                  Right="30rem"
                  Top="34rem"
                  //   fontSize="1rem"
                >
                  {icons}
                </StyledText>
              </StyledDivFlex>

              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Confirm Password</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="confirm password"
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
                Reset Password
              </StyledButton>
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default ResetPassword;
