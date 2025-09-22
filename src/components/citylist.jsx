import React from "react";


const cities=['---','Quito','London','Moscow','Paris','Mexico','Lisbon','Berlin','Milan','Athens','Guatemala']

export function Citylist({handleselectcity}){
    const stylecity={
         'padding': '0.5rem',
        'fontSize': '1.2rem',
        'color':'var(--p-color)',
        'backgroundColor':'transparent'
    }
    const handlechangecity=(e)=>{
        if(e.target.value!=='---'){
            handleselectcity(e.target.value)
        }else{
            alert('you must select a city')
        }
        
    }

    return(
        <select name="" id="" onChange={handlechangecity} style={stylecity}>
            {cities.map((el,index)=>
                <option key={index} value={el}>{el}</option>
            )}
        </select>
    );
}