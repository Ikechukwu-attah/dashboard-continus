import styled from 'styled-components'


export const StyledSelect = styled.select `
 padding:  ${({padding})=>padding};
 font-size: ${({fontSize})=>fontSize};
 border: 1px solid #C4C4C4;
 outline: none;
 border-radius:${({borderRadius})=>borderRadius};
 margin-top: 2rem;
 background: ${({background})=>background};
 cursor: pointer;
 appearance:none;
 -moz-appearance: none;
 -webkit-appearance:none;
`

export const StyledOption = styled.option `
padding:  ${({padding})=>padding};
 font-size: ${({fontSize})=>fontSize};
 border: 1px solid #C4C4C4;

 border-radius:${({borderRadius})=>borderRadius};
`