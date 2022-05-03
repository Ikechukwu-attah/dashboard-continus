import styled from "styled-components";

export const StyledCircle = styled.div `
  width: ${({ width }) => width || "5.2rem"};
  height: ${({ height }) => height || "5.2rem"};
  border-radius: 50%;
  background-color: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
`;