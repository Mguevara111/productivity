import React from "react";
import { useState,useEffect } from "react";
import './weathercomponent.css'


export function Wheatercomponent({city}){
    if(!city){
        return
    }
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log('API Key leída:', apiKey);
    const [data,setData]=useState(null);
    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,{signal})
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw {status:res.status,ok:res.ok} 

            }
        })
        .then(json=>{
            //console.log(json)
            setData(json)
        })
        .catch(err=>{
            if (err.name === 'AbortError') {
                console.log('The fetch was aborted');
            } else {
                console.log(`it was an error: ${err.message}---${err.status}`);
            }
        })
        

        return ()=>controller.abort()
    },[])

    return(
        <div>
            <h2>datos weather</h2>
            <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank">
            api wheater
            </a>
            {data!==null&&
            <section className="weather-container">
            <div>
                <p>City:{data.location.name}</p>
                <p>Temp °C:{data.current.temp_c}</p>
                <p>Temp °F:{data.current.temp_f}</p>
            </div>
            <div>
                <p>Condition:{data.current.condition.text}</p>
                <img src={data.current.condition.icon} alt="weather-icon" />
            </div>
            </section>
            }
            
        </div>
    );
}