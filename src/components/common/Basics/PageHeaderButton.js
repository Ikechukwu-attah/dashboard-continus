import styled from 'styled-components'


export const StyledPageHeaderButton = styled.button `
  padding:1.2rem 1.9rem;
    background-color:${({theme})=>theme.colors.primaryColor};
    font-size:1.8rem;
    color:${({theme})=>theme.colors.secondaryColor};
    border-radius:3rem;
    font-weight:500;
    cursor: pointer;

`