import styled from "styled-components";
import {
    veryLargeDevice,
    largeDevice,
    mediumDevice,
} from "../../../constants/MediaQuery/MediaQuery";

export const StyledImage = styled.img `
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};

  ${veryLargeDevice}
  ${largeDevice}
  ${mediumDevice}
`;