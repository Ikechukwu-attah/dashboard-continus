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

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

input[type=number] {
  -moz-appearance: textfield;
}

`