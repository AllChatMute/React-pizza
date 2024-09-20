import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

interface props {
  setCurrentPage: Function;
}

const Pagination: React.FC = ({ setCurrentPage }: props) => {
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
