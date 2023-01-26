
  
// export default CovidData;
//Display all day one cases for each country in a table 
import React, { useState, useEffect } from 'react';
//import SearchFunctionality from './SearchFunctionality';
//import 'bootstrap';

function Table() {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')

      .then(response => response.json())
      .then(data => setCountry(data))
      .catch(error => console.log(error));
      
     
      

  }, []);

  return (
    
    <table className="table table-info table-striped-columns">
      <thead>
        <tr>
        <th> 
            <h3 className="">Countries</h3>
        </th>
        <th>
            <h3 className="">Day One Cases</h3>
        </th>
        <th>
            <h3 className="">Total Confirmed Cases</h3>
        </th>
        <th>
            <h3 className="">Total Deaths</h3> 
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