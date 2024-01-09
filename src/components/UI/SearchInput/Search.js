import SearchIcon from "../../../assets/svg-icons/search-icon";

import classes from "./Search.module.scss";

const Search = ({ placeholderText, className }) => {
  return (
    <div className={`${classes.searchWrapper} ${className}`}>
      <SearchIcon className={classes.icon} />
      <input
        type="search"
        placeholder={placeholderText}
        className={`${classes.searchInput} ${className}`}
      />
    </div>
  );
};

export default Search;
