import React from "react";
const Pagination = ({ sizePage, totalCountries, pagination }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCountries / sizePage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pages">
      <div className="page_list">
        {pageNumber.map((number) => (
          <button onClick={() => pagination(number)}>{number}</button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
