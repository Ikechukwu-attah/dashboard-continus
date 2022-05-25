import styled from "styled-components";
import {
    largeDevice,
    mediumDevice,
    smallDevice,
    veryLargeDevice,
} from "../../../constants/MediaQuery/MediaQuery";

export const StyledDivGrid = styled.div `
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};

  ${veryLargeDevice}
  ${largeDevice}
  ${mediumDevice}
  ${smallDevice}
`;