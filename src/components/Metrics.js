import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function BarGraph({Countries}){

    
    return<Bar data={Countries} />
}

export default BarGraph;