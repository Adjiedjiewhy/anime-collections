import React from "react";
import styled from "@emotion/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Primary } from "../styles/variables/colors";

const Pagination: React.FC<any> = ({
  currentPage,
  totalPages,
  onPageChange,
  page,
  setPage
}) => {
  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page)
    }
  };

  if (totalPages > 5) {
    totalPages = 5;
  }

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </PageButton>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </PageButton>
        )
      )}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
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
