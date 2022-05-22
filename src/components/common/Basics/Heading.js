import styled from "styled-components";
import { breakPoint } from "../../../constants/breakPoints";

export const StyledTextHeading = styled.h1 `
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding: ${({ padding }) => padding};
  border-bottom: ${({ borderBottom }) => borderBottom};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ theme, color }) => color || theme.colors.secondaryColor};
  white-space: ${({ whiteSpace }) => whiteSpace};

  @media (max-width: ${breakPoint.tablet}) {
    width: ${({ widthT }) => widthT};
    padding: ${({ paddingT }) => paddingT};
    margin: ${({ marginT }) => marginT};
    white-space: ${({ whiteSpaceT }) => whiteSpaceT};
  }

  @media (max-width: ${breakPoint.mobile}) {
    width: ${({ widthM }) => widthM};
    padding: ${({ paddingM }) => paddingM};
    margin: ${({ marginM }) => marginM};
    white-space: ${({ whiteSpaceM }) => whiteSpaceM};
  }
`;