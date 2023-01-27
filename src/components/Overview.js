import { useState ,useEffect} from "react";


function Overview(props) {

    const [globalData, setGlobalData] = useState({});
  
    useEffect(() => {
      fetch( 'https://api.covid19api.com/summary' )
        .then(res => res.json())
        .then(data => {
          setGlobalData(data);
        });
    }, []); 
    return(
        <div>
      <h2>Overview</h2>
      <p>As of <span id="date"></span>, there have been <span id="cases">{globalData.Global?.TotalConfirmed}</span> confirmed cases and <span id="deaths">{globalData.Global?.TotalDeaths}</span> deaths globally.</p>
      <p> <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/news"> Latest News and Updates</a> </p>
    </div>
  );
    }



    
export default Overview;