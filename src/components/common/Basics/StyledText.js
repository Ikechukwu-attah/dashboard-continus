import styled from 'styled-components'



export const StyledText = styled.span `
   font-size: ${({fontSize})=>fontSize};
   font-weight: ${({fontWeight})=>fontWeight};
   color:${({theme,color})=>color||theme.colors.secondaryColor}
   
`