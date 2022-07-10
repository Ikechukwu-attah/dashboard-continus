import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
import { useLoginClient } from "./hooks/useClientLogin";
import ButtonGroup from "../../components/common/Button";
import BisedgeLogo from "../../components/Images/BisedgeLogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [clientLoginData, setClientLoginData] = useState({});
  const { error, data, loginClient, isLoading } = useLoginClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClientLoginData({ ...clientLoginData, [name]: value });
  };
  const handleLoginSubmit = (event) => {
    // event.preventDefault();
    const data = { ...clientLoginData };
    loginClient(data);
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
            fontSizeL="2.8rem"
            fontWeight="400"
            color="#F3EFE9"
          >
            Login your details
          </StyledTextHeading>
          <StyledForm onSubmit={handleSubmit(handleLoginSubmit)}>
            <StyledDivFlex
              flexDirection="column"
              gap="1.5rem"
              justifyContent="center"
              marginTop="2rem"
              padding="0rem 4rem 0rem 4rem"
              paddingSd="0rem 4rem 4rem 6rem !important"
            >
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel fontSizeL="1.8rem">Email</StyledLabel>
                <StyledInput
                  type="email"
                  placeholder="Enter username"
                  // required
                  padding="2.3rem"
                  paddingL="1.5rem"
                  borderFocus={errors.email && "1.5px solid yellow"}
                  fontSize="2.3rem"
                  fontSizeL="1.8rem"
                  name="email"
                  {...register("email", { required: "This field is required" })}
                  value={clientLoginData.email}
                  onChange={handleChange}
                />
                <StyledText color="yellow" fontSize="1.4rem">
                  {errors.email?.message}
                </StyledText>
              </StyledDivFlex>

              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel fontSizeL="1.8rem">Password</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="Enter password"
                  // required
                  padding="2.3rem"
                  paddingL="1.5rem"
                  fontSize="2.3rem"
                  fontSizeL="1.8rem"
                  borderFocus={errors.password && "1.5px solid yellow"}
                  name="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3",
                    },
                  })}
                  value={clientLoginData.password}
                  onChange={handleChange}
                />
                <StyledText color="yellow" fontSize="1.4rem">
                  {errors.password?.message}
                </StyledText>
              </StyledDivFlex>

              <StyledDivFlex gap="2rem" alignItems="center">
                <Link
                  to="/forget-password"
                  style={{
                    textDecoration: "underline",
                    color: "#F3EFE9",
                  }}
                >
                  <StyledText
                    fontSize="1.5rem"
                    fontWeight="400"
                    fontSizeL="1.1rem"
                  >
                    Forget password?{" "}
                  </StyledText>
                </Link>
                <StyledText
                  fontSize="1.5rem"
                  fontWeight="400"
                  fontSizeL="1.1rem"
                >
                  <Link
                    to="/contact-admin"
                    style={{
                      textDecoration: "underline",
                      color: "#F3EFE9",
                    }}
                  >
                    Contact admin
                  </Link>
                </StyledText>

                <StyledText color="red">{error}</StyledText>
              </StyledDivFlex>
              {/* <StyledButton
                padding="1.5rem"
                marginTop="2rem"
                borderRadius="5rem"
                fontSize="2.4rem"
              >
                Login
              </StyledButton> */}

              <ButtonGroup
                isLoading={isLoading}
                padding="1.5rem"
                
                marginTop="2rem"
                borderRadius="5rem"
                fontSize="2.4rem"
                paddingL="0.5rem "
                fontSizeL="2rem"
              >
                Login
              </ButtonGroup>
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default Login;
