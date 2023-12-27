import {BsSearch} from "react-icons/bs";
import styles from "./search.module.css";

const Search = ({keyword, search, searchError, searchLoading, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
  return (
    <div className={styles.searchBox}>
      <BsSearch className={styles.searchIcon}/>
      <input className={styles.input}
             name="keyword"
             value={keyword}
             placeholder="검색할 태그를 입력하세요."
             onChange={e => onChangeKeyword(e)}
             onKeyUp={onSearchKeyword}
      />
    </div>
  );
};

export default Search;