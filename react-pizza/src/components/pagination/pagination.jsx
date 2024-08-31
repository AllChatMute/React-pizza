import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";

const Pagination = ({ items, setPage }) => {
  const itemsPerPage = 8;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
  items: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
