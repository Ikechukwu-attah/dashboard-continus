import styled from 'styled-components'


export const StyledTextHeading = styled.h1 `
text-align: ${({textAlign})=>textAlign};
font-size: ${({fontSize})=>fontSize};
font-weight: ${({fontWeight})=>fontWeight};
padding-top: ${({paddingTop})=>paddingTop};
color:${({theme,color})=>color || theme.colors.secondaryColor}
   

`