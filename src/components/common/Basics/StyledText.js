import styled from "styled-components";
import {
    largeDevice,
    mediumDevice,
    veryLargeDevice,
} from "../../../constants/MediaQuery/MediaQuery";

export const StyledText = styled.span `
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color }) => color || theme.colors.secondaryColor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ position }) => position};
  bottom: ${({ Bottom }) => Bottom};
  left: ${({ Left }) => Left};
  right: ${({ Right }) => Right};
  top: ${({ Top }) => Top};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  white-space: ${({ whiteSpace }) => whiteSpace};
  cursor: ${({ cursor }) => cursor};
  display: ${({ Display }) => Display};
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ background }) => background};
  font-weight: ${({ fontWeight }) => fontWeight};
  overflow: ${({ overFlow }) => overFlow};
  text-overflow: ${({ textOverFlow }) => textOverFlow};

  ${veryLargeDevice}
  ${largeDevice}
  ${mediumDevice}
`;