import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { StyledBox } from "../Basics/DivBox";

const Paginations = ({
  getData,
  getMaintenance,
  totalPages,
  getDriver,
  getOccupancyJournal,
  isLoading,
  data,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const StyledPagination = styled(ReactPaginate)`
    &ul {
      li .page-item.active .page-link {
        background-color: #353231;
      }
    }
  `;

  const handlePageChange = (data) => {
    const filterCriteria = `?page=${data.selected + 1}`;
    console.log("paginations,", filterCriteria);

    getData(filterCriteria);
    // getDriver(filterCriteria);
    // console.log("getDriver", getDriver(filterCriteria));
  };
  console.log("datum", data);
  return (
    <StyledBox display={isLoading || !data?.length ? "none" : "block"}>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={4}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </StyledBox>
  );
};

export default Paginations;
