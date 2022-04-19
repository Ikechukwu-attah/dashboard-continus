import styled from 'styled-components'



export const StyledButton = styled.button `
  padding: ${({padding})=>padding};
  margin-top: ${({marginTop})=>marginTop};
  background-color: ${({theme, background})=>background||theme.colors.secondaryColor};
  border-radius: ${({borderRadius})=>borderRadius};
  font-size: ${({fontSize})=>fontSize};
  color:${({theme,color})=>color||theme.colors.primaryColor};
  font-style: normal;
  width:${({width})=>width};
  display: block;
  font-weight: ${({fontWeight})=>fontWeight||"600"};
  cursor: pointer;
  border: ${({border})=>border|| "none"};
  outline: none;
  min-width: ${({minWidth}) => minWidth};
  &:active{
    outline: none;
  }

  opacity: ${({disabled}) => disabled===true? .5 : 1};
  pointer-events: ${({disabled}) => disabled ===true? "none":"initial"};
`