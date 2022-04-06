import styled from 'styled-components'


export const StyledTextHeading = styled.h1 `
text-align: ${({textAlign})=>textAlign};
font-size: ${({fontSize})=>fontSize};
font-weight: ${({fontWeight})=>fontWeight};
padding-top: ${({paddingTop})=>paddingTop};
padding: ${({padding})=>padding};
border-bottom: ${({borderBottom})=>borderBottom};
text-transform: ${({textTransform})=>textTransform};
color:${({theme,color})=>color || theme.colors.secondaryColor}
   

`