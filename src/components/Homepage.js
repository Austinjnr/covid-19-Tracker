import React, { useEffect,useState } from 'react';
import Overview from './Overview';
import About from './About'
import CountryList from './CountryList';

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
    const navigateToCountryList = () => {
        setCurrentSection('countryList')
    }
  
  return (
    <div className="home-page">
      <h1>COVID-19 Tracker</h1>
      <h2>WELCOME!</h2>

      <div>
        <button onClick={() => navigateToOverview()}>Overview</button>
        <button onClick={() => navigateToAbout()}>About COVID-19</button>
        <button onClick={() => navigateToCountryList()}>Countries</button>
      </div>

        {currentSection === 'overview' && <Overview globalData={globalData} />}
        {currentSection === 'about' && <About />}
        {currentSection === 'countries' && <CountryList />}
        <Overview globalData={globalData} />
    </div>
  );
}

export default HomePage;
