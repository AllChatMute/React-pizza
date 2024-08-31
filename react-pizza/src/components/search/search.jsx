import styles from "./search.module.scss";
import PropTypes from "prop-types";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className={styles.root}>
        <img className={styles.icon} src="/src/assets/img/search.svg" alt="" />
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы ..."
        />
        {searchValue && (
          <img
            className={styles.clearIcon}
            src="/src/assets/img/trash.svg"
            alt=""
            onClick={() => setSearchValue("")}
          />
        )}
      </div>
    </>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
