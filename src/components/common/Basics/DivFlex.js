import styled from 'styled-components'

export const StyledDivFlex = styled.div `
display: ${({display}) => display || "flex"};  
align-items:  ${({alignItems})=>alignItems};
justify-content:${({justifyContent})=>justifyContent};
flex-direction: ${({flexDirection})=>flexDirection};
gap:${({gap})=>gap};
padding: ${({padding})=>padding};
margin-top:${({marginTop})=>marginTop};
background: ${({background})=>background};
width: ${({width})=>width};
height: ${({height})=>height};
border-radius: ${({borderRadius})=>borderRadius};
flex: ${({flex})=>flex};
opacity: ${({opacity})=>opacity};
border: ${({border})=>border};
max-height: ${({maxHeight})=>maxHeight};
min-height: ${({minHeight})=>minHeight};
overflow: ${({overflow})=>overflow};
background-image: ${({backgroundImage}) => backgroundImage};
background-position: ${({backgroundPosition})=>backgroundPosition};
background-repeat: ${({backgroundRepeat})=>backgroundRepeat};
background-size: ${({backgroundSize})=>backgroundSize};
position: ${({position})=>position};
top: ${({Top})=>Top};
bottom: ${({Bottom})=>Bottom};
right: ${({Right})=>Right};
left: ${({Left})=>Left};
flex-wrap:${({flexWrap})=>flexWrap};
max-width: ${({maxWidth})=>maxWidth};
min-width: ${({minWidth})=>minWidth};
cursor: ${({cursor})=>cursor};


${({customCSS}) => customCSS}

&:hover {
    ${({onHover}) => onHover} 
}


`