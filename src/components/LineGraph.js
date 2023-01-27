import React from "react";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function LineGraph({CountryDeaths}){

    
    return<Line data={CountryDeaths} />
}

export default LineGraph;