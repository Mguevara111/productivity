import React from "react";
import { zoneslist } from "./zonesbase.js";
import './zones.css'

export function Zones({handletimezone}){
    
    const changezone=(e)=>{
        handletimezone(e.target.value)
    }
    
    return(
        <select name="" id="" onChange={changezone} className="zones-select">
        {zoneslist.map((el,index)=>
            <option value={el.timezone} key={index}>{el.value}-{el.timezone}</option>
        )}
       </select>
    );
}