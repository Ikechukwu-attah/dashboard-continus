import styled from 'styled-components'



export const StyledButton = styled.button `
  padding: ${({padding})=>padding};
  margin-top: ${({marginTop})=>marginTop};
  background-color: ${({theme, color})=>color||theme.colors.secondaryColor};
  border-radius: ${({borderRaduis})=>borderRaduis};
  font-size: ${({fontSize})=>fontSize};
  color:${({theme,color})=>color||theme.colors.primaryColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`