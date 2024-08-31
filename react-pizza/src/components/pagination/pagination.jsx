import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";

const Pagination = ({ setPage }) => {
  const handlePageClick = (event) => {
    setPage(event.selected);
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
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
