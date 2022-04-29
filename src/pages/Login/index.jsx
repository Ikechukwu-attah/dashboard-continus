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
    console.log("client-login-data", clientLoginData);
  };
  const handleLoginSubmit = (event) => {
    // event.preventDefault();
    const data = { ...clientLoginData };
    loginClient(data);
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
        backgroundImage={`url('./assets/lift.png')`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
      >
        <StyledImage src={BisedgeLogo} alt="bisedge logo" />
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
          <StyledForm onSubmit={handleSubmit(handleLoginSubmit)}>
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
                  placeholder="Enter username"
                  // required
                  padding="2.3rem"
                  borderFocus={errors.email && "1.5px solid yellow"}
                  fontSize="2.3rem"
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
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="Enter password"
                  // required
                  padding="2.3rem"
                  fontSize="2.3rem"
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

              <StyledDivFlex gap="2rem">
                <Link
                  to="/forget-password"
                  style={{
                    textDecoration: "underline",
                    color: "#F3EFE9",
                  }}
                >
                  <StyledText fontSize="1.5rem" fontWeight="400">
                    Forget password?{" "}
                  </StyledText>
                </Link>
                <StyledText fontSize="1.5rem" fontWeight="400">
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
