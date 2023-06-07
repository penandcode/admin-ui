import React from "react";

const Search = ({searchQuery}) => {
  const eventUpdate = (e) => {
    searchQuery(e);
  };
  return (
    <div className="searchBar">
      <input
        placeholder="Search by name, email or role..."
        onChange={eventUpdate}
      />
    </div>
  );
};

export default Search;
