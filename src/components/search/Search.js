import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
const Search = ({value, onchange}) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="Search Users"
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default Search;
