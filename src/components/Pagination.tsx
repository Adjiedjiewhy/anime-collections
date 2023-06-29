import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Primary } from "../styles/variables/colors";


const Pagination: React.FC<any> = ({
  currentPage,
  setCurrentPage,
  shownTotalPages,
  setShownTotalPage,
  totalPage,
  setTotalPage
}) => {
  const [pageModifier, setPageModifier] = useState(0);

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
    else console.log("No");
  };

  useEffect(() => {
    if(currentPage > 3){
      setPageModifier(currentPage - 3);
    }
    else{
      setPageModifier(0);
    }
  }, [currentPage]);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </PageButton>

      {Array.from({ length: shownTotalPages }, (_, index) => index + 1).map(
        (page) => (
          <PageButton
            key={page}
            onClick={() => handlePageChange(page + pageModifier)}
            disabled={currentPage === (page + pageModifier)}
          >
            {page + pageModifier}
          </PageButton>
        )
      )}
      
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <IoIosArrowForward />
      </PageButton>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 8px;
  margin-right: 8px;
  font-size: 20px;
  color: ${Primary.light};
  background-color: ${Primary.base};
  border: 0px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${Primary.light};
    color: ${Primary.dark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Pagination;
