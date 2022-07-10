import React, { useState } from "react";
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
import { useForgetPassword } from "./hooks/useForgetPassword";
import BisedgeLogo from "../../components/Images/BisedgeLogo.png";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const { error, data, forgetPassword, isLoading } = useForgetPassword();
  const [forgetPasswordData, setForgetPasswordData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForgetPasswordData({ ...forgetPasswordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...forgetPasswordData, guard: "admin" };
    forgetPassword(data);

    navigate("/");
  };
  return (
    <StyledDivFlex flexDirectionM="column" gap="4rem" overflow="hidden">
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
        <StyledImage src={BisedgeLogo} alt="bisedge logo" />
      </StyledDivFlex>
      <StyledDivFlex
        flex="60%"
        alignItems="center"
        justifyContent="center"
        paddingM="0 0 4rem 0"
        paddingSd="0 !important"
      >
        <StyledDivFlex
          flexDirection="column"
          width="70%"
          widthL="80%"
          widthM="100%"
          widthSd="100% !important"
          borderRadius="1rem"
          background={Theme.colors.primaryColor}
          padding="4rem 6rem 6rem 6rem"
          paddingSd="0 !important"
          paddingL="1rem 1rem 2.5rem 1rem"

        >
          <StyledTextHeading
            textAlign="center"
            fontSize="3.6rem"
            fontWeight="400"
            color="#F3EFE9"
            fontSizeL="2.8rem"
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
              paddingSd="0rem 4rem 4rem 6rem !important"
            >
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                  type="email"
                  placeholder="Enter your email"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                  paddingL="1.5rem"
                  fontSizeL="1.8rem"
                  name="email"
                  value={forgetPasswordData.email}
                  onChange={handleChange}
                />
              </StyledDivFlex>

              <StyledButton
                padding="1.5rem"
                marginTop="2rem"
                borderRadius="5rem"
                fontSize="2.4rem"
                paddingL="0.5rem "
                fontSizeL="2rem"
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
