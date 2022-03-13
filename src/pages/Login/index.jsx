import React from "react";
import {
  StyledLoginContainer,
  StyledLeftLoginContainer,
  StyledRightLoginContainer,
} from "./style";
import { StyledDivFlex } from "../../components/common/DivFlex";

const Login = () => {
  return (
    <StyledLoginContainer>
      <StyledDivFlex>
        <StyledLeftLoginContainer></StyledLeftLoginContainer>
        <StyledRightLoginContainer></StyledRightLoginContainer>
      </StyledDivFlex>
    </StyledLoginContainer>
  );
};

export default Login;
