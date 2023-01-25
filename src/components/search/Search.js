import React, { useState, useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import MovieContext from "../../store/MovieContext";
import "./Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const { fetchPopular, fetchSearch } = useContext(MovieContext);

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query === "") {
        fetchPopular();
      } else {
        fetchSearch(query);
      }
      setValue("");
    }
  };

  return (
    <div className="search-movies">
      <label htmlFor="search">
        <RiSearchLine  style={{color: "black" }}/>
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for movies"
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
