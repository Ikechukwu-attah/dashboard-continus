import styled from "styled-components";

export const StyledDivGrid = styled.div `
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
`;