/* import React,{useEffect,useState} from "react";

function CountryList(){
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")

        
          .then(res => res.json())
          .then(data => {
            setCountryList(data);
          });
      }, []);
    


    return(
        <div>
            <h2>Countries</h2>
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Confirmed Cases</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {countryList.map(country => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.confirmedCases}</td>
            <td>{country.deaths}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
        

    )
    

}
export default CountryList;
 */