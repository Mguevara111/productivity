import React from "react";
import { useState,useEffect } from "react";
import './search.css';

export function Search({wstate,night}){
    const [widgettofind,setWidgettofind]=useState('');

    useEffect(()=>{
        if(widgettofind){
            const datatofind=wstate.find(el=>el.name==widgettofind)
            if(datatofind){
                window.location.href=`#${datatofind.name}`
                setWidgettofind('')
            }
        }
        
    },[widgettofind])

    const findelement=(e)=>{
        //console.log(e.target.value)
       setWidgettofind(e.target.value)
    }

    

    return(
        <div className="search-container">
        <input type="text" placeholder="search widget..." className={`search ${night?"night-mode":""}`} list="options" onChange={findelement} value={widgettofind} />
        <datalist id="options">
                {wstate.map(el=>
                    <option key={el.id}>{el.name}</option>
                )}
        </datalist>
        
        </div>
    );
}