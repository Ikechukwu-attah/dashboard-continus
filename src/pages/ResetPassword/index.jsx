import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import PasswordResetSuccess from "./PasswordResetSuccess";
import { useResetPassword } from "./hooks/useResetPassword";
import ButtonGroup from "../../components/common/Button";

const ResetPassword = () => {
  const { token } = useParams();
  console.log("params", token);
  const navigate = useNavigate();

  const [passwordRestData, setPasswordResetData] = useState({});
  const { data, isLoading, error, resetPassword } = useResetPassword();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswordResetData({ ...passwordRestData, [name]: value });
    console.log("passwordrestData", passwordRestData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...passwordRestData, reset_token: token };
    resetPassword(data);
  };

  const [icons, InputType] = TogglePassword();

  const validatePassword = () => {
    if (!passwordRestData.new_password || !passwordRestData.confirmPassword)
      return false;
    if (passwordRestData.new_password !== passwordRestData.confirmPassword) {
      return false;
    }
    return true;
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
        <StyledImage src="/assets/bisedge-logo1.png" alt="bisedge logo" />
      </StyledDivFlex>
      <StyledDivFlex flex="60%" alignItems="center" justifyContent="center">
        {data ? (
          <PasswordResetSuccess />
        ) : (
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
                  // postion="relative"
                >
                  <StyledLabel>Password</StyledLabel>
                  <StyledInput
                    type={InputType}
                    placeholder="Enter password"
                    required
                    padding="2.3rem"
                    fontSize="2.3rem"
                    name="new_password"
                    value={passwordRestData.new_password}
                    onChange={handleChange}
                    position="relative"
                  />
                  <StyledText
                    position="absolute"
                    color="#606060"
                    Right="30rem"
                    Top="31rem"
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
                    name="confirmPassword"
                    value={passwordRestData.confirmPassword}
                    onChange={handleChange}
                  />
                </StyledDivFlex>

                <ButtonGroup
                  isLoading={isLoading}
                  padding="1.5rem"
                  marginTop="2rem"
                  borderRadius="5rem"
                  fontSize="2.4rem"
                  disabled={!validatePassword()}
                >
                  Reset Password
                </ButtonGroup>
              </StyledDivFlex>
            </StyledForm>
          </StyledDivFlex>
        )}
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default ResetPassword;
