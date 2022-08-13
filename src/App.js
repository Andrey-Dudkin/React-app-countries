import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search/Search";
// import { arryCountries } from "./countries";
import Country from "./Components/Country/Country";
import Pagination from "./Components/Pagination/Pagination";
import "./App.css"
const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries,setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePage] = useState(15);

  useEffect(() =>{
    const getCountries = async() =>{
      const result = await axios.get("https://restcountries.com/v3.1/all")
      setCountries(result.data)
    }
    getCountries()
  },[])

  const search = countries.filter((country) =>
    country.name.common.includes(searchCountry)
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
      <h1 className="title">Country Directory</h1>
      <Search setSearchCountry={setSearchCountry} />
      <div className="flex_container">
        {currentPageCountries.map((country, index) => (
          <Country
            key={index}  
            flag={country.flags.png}
            title={country.name.common}
            capital={country.capital}
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
