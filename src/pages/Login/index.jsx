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
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/home");
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
            Login your details
          </StyledTextHeading>
          <StyledForm onSubmit={handleSubmit}>
            <StyledDivFlex
              flexDirection="column"
              gap="1.5rem"
              justifyContent="center"
              marginTop="2rem"
              padding="0rem 4rem 0rem 4rem"
            >
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Username</StyledLabel>
                <StyledInput
                  type="text"
                  placeholder="Enter username"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                />
              </StyledDivFlex>

              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="Enter password"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                />
              </StyledDivFlex>

              <StyledDivFlex gap="2rem">
                <StyledText fontSize="1.5rem" fontWeight="400">
                  Forget password?{" "}
                </StyledText>
                <StyledText fontSize="1.5rem" fontWeight="400">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "underline",
                      color: "#F3EFE9",
                    }}
                  >
                    Contact admin
                  </Link>
                </StyledText>
              </StyledDivFlex>
              <StyledButton
                padding="1.5rem"
                marginTop="2rem"
                borderRadius="5rem"
                fontSize="2.4rem"
              >
                Login
              </StyledButton>
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default Login;
