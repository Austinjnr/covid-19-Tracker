import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import { useState } from "react";


function BarGraph(){
    const[data, setData]=useState({})

    useEffect(()=>{

    }, [])
    return(
        <div>
            <Bar 
            data
            options
            />
        </div>
    )
}

export default BarGraph


