import React from 'react';
/* import { Router, Routes,Route } from 'react-router-dom'; */
import CountryList from './components/CountryList';
import Homepage from './components/Homepage'
import Overview from './components/Overview';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Homepage/>

    </div>
      
    );
  
}

export default App;
{/* <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<CountryList />} />
      </Routes>
      </Router>
       */}