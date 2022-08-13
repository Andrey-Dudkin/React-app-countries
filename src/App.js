import React, { useState } from "react";
import Search from "./Components/Search/Search";
import { arryCountries } from "./countries";
import Country from "./Components/Country/Country";
import Pagination from "./Components/Pagination/Pagination";
import "./App.css"
const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries] = useState(arryCountries);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePage] = useState(10);

  const search = countries.filter((country) =>
    country.namecountry.includes(searchCountry)
  );

  if (currentPage > Math.ceil(search.length / sizePage) && search.length > 0) {
    setCurrentPage(1);
  }

  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  const lastPageIndex = currentPage * sizePage;
  const firstPageIndex = lastPageIndex - sizePage;
  const currentPageCountries = search.slice(firstPageIndex, lastPageIndex);

  return (
    <div className="App">
      <Search setSearchCountry={setSearchCountry} />
      <div className="flex_container">
        {currentPageCountries.map((country) => (
          <Country
            key={country.id}  
            flag={country.flagcountry}
            title={country.namecountry}
            capital={country.capitalcountry}
          />
        ))}
      </div>
      <Pagination
        sizePage={sizePage}
        totalCountries={search.length}
        pagination={pagination}
      />
    </div>
  );
};

export default App;
