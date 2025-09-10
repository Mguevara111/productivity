import React from "react";


const cities=['---','Quito','London','Moscow','Paris','Mexico','Lisbon','Berlin','Milan','Athens']

export function Citylist({handleselectcity}){

    const handlechangecity=(e)=>{
        if(e.target.value!=='---'){
            handleselectcity(e.target.value)
        }else{
            alert('you must select a city')
        }
        
    }

    return(
        <select name="" id="" onChange={handlechangecity}>
            {cities.map((el,index)=>
                <option key={index} value={el}>{el}</option>
            )}
        </select>
    );
}