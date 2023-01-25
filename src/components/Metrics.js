import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";

function BarGraph(){
    const [data, setData]=useState({});

    useEffect(()=>{
        fetch('https://api.npoint.io/57e11db613c05d4c58dc/')
        .then(response=>response.json())
        .then(data =>{
            //rendering info on data
        })

    },[])
    return(
        <div>
            <Bar data options
            />
        </div>
    )
}

export default BarGraph;
