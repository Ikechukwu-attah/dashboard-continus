import styled from 'styled-components'
import { Theme } from '../../../Theme'




export const StyledList = styled.li `
display: ${({display})=>display};
justify-content: ${({justifyContent})=>justifyContent};
font-size: ${({fontSize})=>fontSize};
line-height: ${(lineHeight)=>lineHeight};
font-weight: ${({fontWeight})=>fontWeight};
color: ${({color})=>color};
border: ${({border})=>border};
background-color: ${({background})=>background};
padding: ${({padding})=>padding};
border-radius: ${({borderRadius })=>borderRadius };
border-top-left-radius : ${({topLeftBorderRadius})=>topLeftBorderRadius};
border-bottom-left-radius : ${({bottomLeftBorderRadius})=>bottomLeftBorderRadius};


&:hover{
   background-color: ${({theme, noHover})=>!noHover && theme.colors.secondaryColor};
   color: ${({theme, hoverColor})=> hoverColor || theme.colors.primaryColor};
   
}


.active{
     color: red;
     background: #7600dc;
 }

`


export const StyledUl = styled.ul `
padding: 0;
margin: 0;
position: ${({position}) => position};
background: ${({background}) => background};
top: ${({Top})=>Top};
bottom: ${({Bottom})=>Bottom};
border-radius: ${({borderRadius})=>borderRadius};
right: ${({Right})=>Right};
opacity: ${({opacity})=>opacity};
left: ${({Left})=>Left};
list-style-type:  none;
z-index: ${({zIndex}) => 10 || zIndex};
transform: scale(${({scale}) => scale});

`