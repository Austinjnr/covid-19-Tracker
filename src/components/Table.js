import React, { useState, useEffect } from 'react';
import 'bootstrap';



function Table() {

  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');
  

  console.log(search)

  useEffect(() => {
    fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')

      .then(response => response.json())
      .then(data => setCountry(data))
      .catch(error => console.log(error));

  }, []);

  return (
    
    <div className="table-container height: 100px;  overflow-y: scroll col-sm-6">

          <div className="bold-margin">
          <input
            type="text"
            className="form-control"
            size="lg"
            placeholder="Search Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </div>

      <table className="table table-info table-striped-columns">
  
      <thead>
        <tr>
        <th> 
            <h3 className="table-head-font">Countries</h3>
        </th>
        <th>
            <h3 className="table-head-font">Day One Cases</h3>
        </th>
        <th>
            <h3 className="table-head-font">Total Confirmed Cases</h3>
        </th>
        <th>
            <h3 className="table-head-font">Total Deaths</h3> 
        </th>
        </tr>
      </thead>
      <tbody>
        {country
      
        .filter((data) => {
          return search.toLowerCase() === ''
            ? data
            : data.Country.toLowerCase().includes(search);
        })

        .map(Countries => (
          <tr key={Countries.id}>
            <td>{Countries.Country}</td>
            <td>{Countries.NewConfirmed}</td>
            <td>{Countries.TotalConfirmed}</td>
            <td>{Countries.TotalDeaths}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    
  );
}

export default Table;
