import styled from "styled-components";
import {
    largeDevice,
    mediumDevice,
    smallDevice,
    veryLargeDevice,
} from "../../../constants/MediaQuery/MediaQuery";

export const StyledDashboardContentWrapper = styled.div `
  overflow: auto;
  max-height: calc(100vh - 5.6rem);
  padding-bottom: 4rem;

  ${veryLargeDevice}
  ${largeDevice}
  ${mediumDevice}
  ${smallDevice}
`;