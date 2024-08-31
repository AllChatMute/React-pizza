import { useContext } from "react";
import styles from "./search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
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

export default Search;
