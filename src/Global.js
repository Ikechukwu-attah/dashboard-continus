import { createGlobalStyle } from 'styled-components';




export default createGlobalStyle `
  *,
  *::after,
  *::before {
      margin:0;
      padding:0;
      box-sizing:inherit;
  }


  html{
      font-size:62.5%;
  }


body {
    font-family: 'Poppins', sans-serif;
    box-sizing:border-box;
    color:#000000;
    background-color:#F3EFE9;
   
  }
`