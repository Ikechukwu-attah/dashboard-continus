import { fontSize } from "@mui/system";
import React from "react";
import { Theme } from "../../../Theme";
import { StyledDivFlex } from "../Basics/DivFlex";
import { StyledText } from "../Basics/StyledText";
import { StyledSpinning } from "../SpinningLoader/style";
import { StyledButton } from "./style";

const ButtonGroup = ({
  isLoading,
  width,
  spinnerWidth,
  spinnerHeight,
  background,
  padding,
  margin,
  borderRadius,
  fontSize,
  color = Theme.colors.primaryColor,
  fontWeight,
  onClickMessage,
  disabled,
  children,
  paddingS,
  paddingL,
  fontSizeS,
  widthS
}) => {
  return (
    <StyledButton
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      fontSize={fontSize}
      width={width}
      paddingS={paddingS}
      fontSizeS={fontSizeS}
      background={background}
      fontWeight={fontWeight}
      onClick={onClickMessage}
      disabled={disabled}
      paddingL={paddingL}
      widthS={widthS}
    >
      <StyledDivFlex justifyContent="center" width="100%" gap="2rem">
        {isLoading && (
          <StyledSpinning
            speed="1s"
            width={spinnerWidth}
            height={spinnerHeight}
          />
        )}
        <StyledText color={color} whiteSpace="nowrap">
          {children}
        </StyledText>
      </StyledDivFlex>
    </StyledButton>
  );
};

export default ButtonGroup;
