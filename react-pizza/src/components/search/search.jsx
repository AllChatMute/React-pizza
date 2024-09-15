import { useRef, useCallback, useState } from "react";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleClear = (event) => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus(event);
  };

  const updateSearchValue = useCallback(
    debounce((str) => dispatch(setSearchValue(str)), 250),
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
