import { useState ,useEffect} from "react";
import Table from './Table';
import BarGraph from './Metrics';
import LineGraph from './LineGraph';
import {data} from '../Countries'


function Overview () {

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
  const [globalData, setGlobalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch( 'https://api.covid19api.com/summary' )
      .then(res => res.json())
      .then(data => {
        setGlobalData(data);
        setIsLoading(false);
      });
  }, []);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return(
<>
      <div className='overview text-light'>
          <h2 className="display-4">Overview</h2>
    <p>As of now there have been <span id="cases">{globalData.Global?.TotalConfirmed}</span> confirmed cases and <span id="deaths">{globalData.Global?.TotalDeaths}</span> deaths globally. 
    </p>
    <p1>For more <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/news"> Latest News and Updates</a> </p1>
  </div>
    <div className='data row'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div>
            <Table />
            </div>
          </div>

          <div className='col'>
            <div>
              <h1 className='me-9 d-flex justify-content-center'>
              CoronaVirus Stats
              </h1>
              <p className='d-flex justify-content-center'>
              Below are some graphs displaying the recovery and mortality 
              rates together with the rapid spread of Covid-19 among countries.
              </p>
              <div className='border border-primary-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <div className='card-body text-bg-light'>
                <h5 className="card-title text-center">
                      A Graph of the Total Cases Confirmed Against Countries
                </h5>
                        < BarGraph Countries={countries}/>
                </div>
              </div>

              <div className='border border-warning-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <div className='card-body text-bg-light'>
                <h5 className="card-title text-center">
                       A Graph of the Total Deaths Confirmed Against Countries
                </h5>
                    < LineGraph CountryDeaths={deaths}/>
                </div>
              </div>

            </div>

          </div>

        </div>
</>
  );
  
    }



    
export default Overview;