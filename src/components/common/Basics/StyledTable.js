import styled from "styled-components";

export const StyledTable = styled.table `
  /* font-family: Arial, Helvetica, sans-serif; */
  border-collapse: collapse;
  /* width: calc(100vw - 30rem); */
  /* background-color: red; */
  /* overflow-x: scroll !important ; */
  width: ${({ width }) => width};

  & td,
  & th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  & tbody {
    background-color: white;
  }

  & td {
    max-width: 10rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & tr:nth-child(even) {
    background-color: rgba(2, 115, 81, 0.3);
  }

  & tr:hover {
    background-color: #ddd;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #027351;
    color: white;

    input {
      border-radius: 2px;
      border: none;
      outline: none;
      color: #000;
      padding-left: 1rem;
      line-height: 1px !important;
      font-size: 1.2rem;
      /* width: 80%; */
      font-family: Poppins !important;
      font-weight: 300 !important;

      ::placeholder {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        font-family: Poppins !important;
      }
    }

    .input-filter {
      padding-top: 0.5rem;
    }
  }
`;