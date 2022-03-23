import styled from 'styled-components'



export const StyledBox = styled.div `
width: ${({width})=>width};
min-height: ${({minHeight})=>minHeight};
height: ${({height})=>height};
background-color: ${({background})=> background};
padding: ${({padding})=>padding};
margin-top: ${({marginTop})=>marginTop};
box-shadow: ${({boxShadow})=>boxShadow};
border-radius:${({borderRadius})=>borderRadius};
display:${({flex})=>flex};
position: ${({position})=>position};
top: ${({Top})=>Top};
bottom: ${({Bottom})=>Bottom};
right: ${({Right})=>Right};
left: ${({Left})=>Left};
cursor:${({cursor})=>cursor}


`