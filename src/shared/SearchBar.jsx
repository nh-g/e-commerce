// NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Properties
  const history = useHistory();

  // Methods
  function Search(event) {
    event.preventDefault();
    history.push(`/results/${query}`);
  }

  return (
      <form onSubmit={Search} className="header__search">
        <input
          type="text"
          placeholder=""
          value={query}
          onChange={(event) => setQuery(event.target.value.replace(/\s/g, ""))}
          className="header__searchInput"
          required
        />
        <SearchIcon className="searchIcon" />
      </form>
  );
}
