import styled from "styled-components";

export const StyledPageHeaderButton = styled.button `
  padding: 1rem 2rem 1rem 2vw;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  font-size: calc(0.5rem + 0.8vw);
  color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 3rem;
  font-weight: 500;
  cursor: pointer;
`;