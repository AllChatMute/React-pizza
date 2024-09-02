import { useContext, useRef, useCallback, useState } from "react";
import styles from "./search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const handleClear = (event) => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus(event);
  };

  const updateSearchValue = useCallback(
    debounce((str) => setSearchValue(str), 250),
    []
  );

  const handleChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <>
      <div className={styles.root}>
        <img className={styles.icon} src="/src/assets/img/search.svg" alt="" />
        <input
          ref={inputRef}
          value={value}
          onChange={handleChangeInput}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы ..."
        />
        {value && (
          <img
            className={styles.clearIcon}
            src="/src/assets/img/trash.svg"
            alt=""
            onClick={handleClear}
          />
        )}
      </div>
    </>
  );
};

export default Search;
