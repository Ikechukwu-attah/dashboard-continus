import styled from "styled-components";
import { breakPoint } from "../../../constants/breakPoints";
import {
    largeDevice,
    mediumDevice,
    smallDevice,
    veryLargeDevice,
} from "../../../constants/MediaQuery/MediaQuery";
import { Theme } from "../../../Theme";

export const StyledList = styled.li `
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${(lineHeight) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  background-color: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  min-width: ${({ minWidth }) => minWidth};
  overflow: ${({ overFlow }) => overFlow};
  text-overflow: ${({ textOverFlow }) => textOverFlow};
  white-space: ${({ whiteSpace }) => whiteSpace};
  width: ${({ width }) => width};
  text-transform: ${({ textTransform }) => textTransform};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top-left-radius: ${({ topLeftBorderRadius }) => topLeftBorderRadius};
  border-bottom-left-radius: ${({ bottomLeftBorderRadius }) =>
    bottomLeftBorderRadius};

  &:hover {
    background-color: ${({ theme, noHover }) =>
      !noHover && theme.colors.secondaryColor};
    color: ${({ theme, hoverColor }) =>
      hoverColor || theme.colors.primaryColor};
  }

  .active {
    color: red;
    background: #7600dc;
  }

  ${veryLargeDevice}
  ${largeDevice}
${mediumDevice}
${smallDevice}
`;

export const StyledUl = styled.ul `
  padding: 0;
  margin: 0;
  position: ${({ position }) => position};
  background: ${({ background }) => background};
  top: ${({ Top }) => Top};
  bottom: ${({ Bottom }) => Bottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  right: ${({ Right }) => Right};
  opacity: ${({ opacity }) => opacity};
  left: ${({ Left }) => Left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: ${({ overFlow }) => overFlow};
  min-width: ${({ minWidth }) => minWidth};
  list-style-type: none;
  z-index: ${({ zIndex }) => 10 || zIndex};
  transform: scale(${({ scale }) => scale});

  ::-webkit-scrollbar {
    width: ${({ scrollBarWidth, overFlow }) => overFlow && scrollBarWidth};
  }
`;