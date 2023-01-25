
// import React, { useEffect, useState } from "react";
// //import "./CovidData.css";
  
// function CovidData() {
//   const [country, setCountry] = useState("");
//   const [cases, setCases] = useState("");
//   const [recovered, setRecovered] = useState("");
//   const [deaths, setDeaths] = useState("");
//   const [todayCases, setTodayCases] = useState("");
//   const [deathCases, setDeathCases] = useState("");
//   const [recoveredCases, setRecoveredCases] = useState("");
//   const [userInput, setUserInput] = useState("");
  
//   useEffect(() => {
//     fetch("https://disease.sh/v3/covid-19/countries")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  
//   const setData = ({
//     country,
//     cases,
//     deaths,
//     recovered,
//     todayCases,
//     todayDeaths,
//     todayRecovered,
//   }) => {
//     setCountry(country);
//     setCases(cases);
//     setRecovered(recovered);
//     setDeaths(deaths);
//     setTodayCases(todayCases);
//     setDeathCases(todayDeaths);
//     setRecoveredCases(todayRecovered);
//   };
  
//   const handleSearch = (e) => {
//     setUserInput(e.target.value);
//   };
//   const handleSubmit = (props) => {
//     props.preventDefault();
//     fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   };
  
//   return (
//     <div className="covidData">
//       <h1>COVID-19 CASES COUNTRY WISE</h1>
//       <div className="covidData__input">
//         <form onSubmit={handleSubmit}>
//           {/* input county name */}
//           <input onChange={handleSearch} placeholder="Enter Country Name" />
//           <br />
//           <button type="submit">Search</button>
//         </form>
//       </div>
  
//       {/* Showing the details of the country */}
//       <div className="covidData__country__info">
//         <p>Country Name : {country} </p>
  
//         <p>Cases : {cases}</p>
  
//         <p>Deaths : {deaths}</p>
  
//         <p>Recovered : {recovered}</p>
  
//         <p>Cases Today : {todayCases}</p>
  
//         <p>Deaths Today : {deathCases}</p>
  
//         <p>Recovered Today : {recoveredCases}</p>
//       </div>
//     </div>
//   );
// }
  
// export default CovidData;
//Display all day one cases for each country in a table 
import React, { useState, useEffect } from 'react';


function Table() {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')

      .then(response => response.json())
      .then(data => setCountry(data))
      .catch(error => console.log(error));
      
     
      

  }, []);

  return (
    
    <table className='ui segmented celled table'>
      <thead>
        <tr>
        <th> 
            <h3>Countries</h3>
        </th>
        <th>
            <h3>Day One Cases</h3>
        </th>
        <th>
            <h3>Total Confirmed Cases</h3>
        </th>
        <th>
            <h3>Total Deaths</h3> 
        </th>
        </tr>
      </thead>
      <tbody>
        {country.map(Countries => (
          <tr key={Countries.id}>
            <td>{Countries.Country}</td>
            <td>{Countries.NewConfirmed}</td>
            <td>{Countries.TotalConfirmed}</td>
            <td>{Countries.TotalDeaths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;