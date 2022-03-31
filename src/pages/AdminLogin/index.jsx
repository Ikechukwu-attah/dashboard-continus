import React, { useEffect, useState } from "react";
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
import { useAdminLogin } from "./hooks/UseAdminLogin";
import ButtonGroup from "../../components/common/Button";
import feedbackMessage from "../../components/common/Basics/FeedbackMessage";
import { successMessage } from "../../components/common/Basics/FeedbackMessage";
const AdminLogin = () => {
  const { isLoading, error, loginAdmin } = useAdminLogin();
  const [adminData, setAdminData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...adminData, guard: "admin" };
    console.log("data...............", data);
    loginAdmin(data);

    // navigate("/home");
  };

  // useEffect(() => {
  //   console.log("called");
  //   successMessage(error);
  // }, [error]);

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
            Admin Login
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
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                  type="email"
                  placeholder="Enter email"
                  required
                  padding="2.3rem"
                  fontSize="2.3rem"
                  name="email"
                  value={adminData.email}
                  onChange={handleChange}
                />
              </StyledDivFlex>

              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel>Password</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="Enter password"
                  required
                  name="password"
                  onChange={handleChange}
                  value={adminData.password}
                  padding="2.3rem"
                  fontSize="2.3rem"
                />
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
              <StyledText color="red" fontSize="1.3rem">
                {error}
              </StyledText>
              <ButtonGroup text="Login" isLoading={isLoading} />
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>
      </StyledDivFlex>
    </StyledDivFlex>
  );
};

export default AdminLogin;
