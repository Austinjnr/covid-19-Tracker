import React, { useEffect,useState } from 'react';
import Overview from './Overview';
import About from './About'
import 'bootstrap'

function HomePage() {
    const [globalData, setGlobalData] = useState({});
    const [currentSection, setCurrentSection] = useState('overview');
  
    useEffect(() => {
      fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
          setGlobalData(data);
        });
    }, []);
    
    const navigateToOverview = () => {
        setCurrentSection('overview')
    }
    const navigateToAbout = () => {
        setCurrentSection('about')
    }
    
  return (
    <div className="home-page">
      <h1 className=' d-flex justify-content-center'>
          CoronaVirus Statistical Health Tracker
      </h1>
      <h2 className=' d-flex justify-content-center'>WELCOME!</h2>
 
      <div className=' d-flex justify-content-center'>
    <button className='btn btn-secondary me-5'
    onClick={() => navigateToOverview()}>Overview
    </button>
    <button className='btn btn-secondary'
    onClick={() => navigateToAbout()}>About COVID-19
    </button>
    {/*<button onClick={() => navigateToCountries()}>Countries</button>*/}
  </div>

    {currentSection === 'overview' && <Overview globalData={globalData} />}
    {currentSection === 'about' && <About />}
</div>

  );
}

export default HomePage;