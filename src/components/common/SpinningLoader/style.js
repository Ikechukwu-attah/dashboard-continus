import styled from 'styled-components'



export const StyledSpinning = styled.div `
   display: flex;
   align-items: center;

   ::after{
      content : "";
      width: 2.5rem;
      height: 2.5rem;
      border: 10px solid #dddddd;
      border-top-color: #009579;
      border-bottom-color: #009579;
      border-radius: 50%;
      animation: loading ${({speed}) => speed} linear infinite;
   }

   @keyframes loading {
       to {
           transform: rotate(1turn);
       }
   }

`