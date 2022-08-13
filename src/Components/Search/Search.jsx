import React from "react";
const Search = ({ setSearchCountry }) => {
  return (
    <div className="search_countries">
      <input
        type="text"
        placeholder="Search country"
        className="seach_input"
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </div>
  );
};

export default Search;