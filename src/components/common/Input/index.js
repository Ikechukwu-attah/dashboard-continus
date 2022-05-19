import styled from "styled-components";

export const StyledInput = styled.input `
  padding: ${({ padding }) => padding};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: none;
  outline: none;
  font-size: ${({ fontSize }) => fontSize};
  transform: scale(${({ scale }) => scale});
  position: ${({ position }) => position};
  width: ${({ width }) => width};

  &:focus {
    outline: none;
    border: ${({ borderFocus }) => borderFocus};
  }

  ::placeholder {
    font-size: 1.8rem;
    color: #606060;
    font-family: Poppins;
    line-height: 2.2rem;
    font-weight: 400;
  }
`;

export const StyledLabel = styled.label `
  font-size: ${({ fontSize }) => fontSize || "2.4rem"};
  color: ${({ theme, color }) => color || theme.colors.secondaryColor};
  font-weight: 400;
  cursor: ${({ cursor }) => cursor};
  position: ${({ position }) => position};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  ${({ customCSS }) => customCSS}
`;