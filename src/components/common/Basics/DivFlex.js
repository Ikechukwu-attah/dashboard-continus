import styled from 'styled-components'

export const StyledDivFlex = styled.div `
display: flex;
align-items:  ${({alignItems})=>alignItems};
justify-content:${({justifyContent})=>justifyContent};
flex-direction: ${({flexDirection})=>flexDirection};
gap:${({gap})=>gap};
padding: ${({padding})=>padding};
margin-top:${({marginTop})=>marginTop};
background: ${({background})=>background};
width: ${({width})=>width};
height: ${({height})=>height};
background: ${({background})=>background};
border-radius: ${({borderRadius})=>borderRadius};
flex: ${({flex})=>flex};


`