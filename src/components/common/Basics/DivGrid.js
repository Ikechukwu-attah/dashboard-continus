import styled from 'styled-components'



export const StyledDivGrid = styled.div `
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(100rem, 1fr));
   grid-gap: ${({gap})=>gap};
   width:${({width})=>width}
`