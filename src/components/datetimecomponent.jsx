import React from "react";
import { useHour } from "./date/time";
import { useState } from "react";


export function Datetimecomponent({timezone}){
    //console.log(timezone)
    let hourstyle={
        'textAlign':'center'
    }
    let hour=useHour(timezone)
    return(
        <div style={hourstyle}>
        <p>{hour}</p>
        </div>
        
    );
}