import styled from 'styled-components'
import { Theme } from '../../../Theme'




export const StyledList = styled.li `
font-size: ${({fontSize})=>fontSize};
line-height: ${(lineHeight)=>lineHeight};
font-weight: ${({fontWeight})=>fontWeight};
color: ${({color})=>color};
background-color: ${({background})=>background};
padding: ${({padding})=>padding};
border-top-left-radius : ${({topLeftBorderRadius})=>topLeftBorderRadius};
border-bottom-left-radius : ${({bottomLeftBorderRadius})=>bottomLeftBorderRadius};


&:hover{
   background-color: ${({theme})=>theme.colors.secondaryColor};
   color: ${({theme})=>theme.colors.primaryColor};
   
}


.active{
     color: red;
     background: #7600dc;
 }

`


export const StyledUl = styled.ul `
padding: 0;
margin: 0;
list-style-type:  none;



`