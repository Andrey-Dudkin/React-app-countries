import React from "react";
const Country = (props) => {
  return (
    <div className="country">
      <div className="country_post">
        <div className="img">
          <img src={props.flag} alt="country flag" className="flag" />
        </div>
        <h3>Country: {props.title}</h3>
        <h3>Capital: {props.capital} </h3>
      </div>
    </div>
  );
};

export default Country;