import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";

const Pagination = ({ setCurrentPage }) => {
  const handlePageClick = (event) => {
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
Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
