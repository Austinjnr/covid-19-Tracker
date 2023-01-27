import React, { useState, useEffect } from 'react';

function Countries() {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')
            .then(res => res.json())
            .then(data => {
                setCountriesData(data);
            });
    }, []);

    return (
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
                    {countriesData.map(country => (
                        <tr key={country.name}>
                            <td>{country.name}</td>
                            <td>{country.confirmedCases}</td>
                            <td>{country.deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Countries;