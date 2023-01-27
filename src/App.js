import './App.css';
import React, {useState} from 'react';
import 'bootstrap'
import Table from './components/Table';
import BarGraph from './components/Metrics';
import LineGraph from './components/LineGraph';
import {data} from './components/Countries'
import Homepage from './components/Homepage'


  function App() {
    const [countries, setCountries]=useState({
      labels: data.map((info)=>info.CountryCode),
      datasets:[{
        label:"Infected Population Per Country",
        data:data.map((info)=>info.TotalConfirmed),
        backgroundColor: ['purple'],
         borderColor: ['grey'],
        barPercentage: '1.2',
        borderWidth: '1'
      }]
    })

    const [deaths, setDeaths]=useState({
      labels: data.map((info)=>info.Country),
      datasets:[{
        label:"Rate of Deaths Per Country",
        data:data.map((info)=>info.TotalDeaths),
        backgroundColor: ['red'],
         borderColor: ['black'],
        barPercentage: '1.2',
        borderWidth: '1'
      }]
    })
    
   

    return (
      <div className='covid-19'>
          <div className='App'>
                      <Homepage/>
               </div>
               <div className='App'>
                      <Table />
               </div>
        <h1 className='me-9 d-flex justify-content-center'>  
          CoronaVirus Stats 
        </h1>
  
        <p className='d-flex justify-content-center'>
             Below are some graphs displaying the recovery and mortality rates together with the rapid spread of Covid-19 among countries.
        </p>
        <div className="border border-primary-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body text-bg-light">
                  <h5 className="card-title text-center">
                      A Graph of the Total Cases Confirmed Against Countries
                  </h5>
                          < BarGraph Countries={countries}/>
              </div>
        </div>
  
        <div className=" p-2 g-col-6 border border-warning-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body text-bg-light">
                <h5 className="card-title text-center">
                  A Graph of the Total Deaths Confirmed Against Countries
                </h5>
                < LineGraph CountryDeaths={deaths}/>
              </div>
          </div>

          

</div>
    )
  }
  
  
export default App;