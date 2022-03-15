import styled from 'styled-components'



export const StyledButton = styled.button `
  padding: ${({padding})=>padding};
  margin-top: ${({marginTop})=>marginTop};
  background-color: ${({theme, background})=>background||theme.colors.secondaryColor};
  border-radius: ${({borderRadius})=>borderRadius};
  font-size: ${({fontSize})=>fontSize};
  color:${({theme,color})=>color||theme.colors.primaryColor};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${({fontWeight})=>fontWeight||"600"};
  cursor: pointer;
  border: none;
  outline: none;
  &:active{
    outline: none;
  }
`