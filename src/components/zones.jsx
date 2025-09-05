import React from "react";
import { zoneslist } from "./zonesbase.js";

export function Zones({handletimezone}){
    
    const changezone=(e)=>{
        handletimezone(e.target.value)
    }
    
    return(
        <select name="" id="" onChange={changezone}>
        {zoneslist.map((el,index)=>
            <option value={el} key={index}>{el}</option>
        )}
       </select>
    );
}