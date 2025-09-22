import React from "react";
import { Header } from "./header";
import { Dashboard } from "./dashboard";
import { useReducer,useState } from "react";
import { Reducer } from "./reducer.js";
import { widgets } from "./base.js";


export function Mainprod(){
    const [activemodal,setActivemodal]=useState(false);
    const [wstate,dispatch]=useReducer(Reducer,widgets)
    const [night,setNight]=useState(false);       //aqui va estado tema obscuto / claro


    const handleactivemodal=()=>{
        setActivemodal(!activemodal)
    }

    const handlechangetheme=(e)=>{
       if(e.target.dataset.name==='day'){
        //console.log('modo dia')
        setNight(false)
       }else{
        //console.log('modo noche')
        setNight(true)
       }
        
    }

    return(
        <>
            <Header dispatch={dispatch} handleactivemodal={handleactivemodal} handlechangetheme={handlechangetheme} night={night} wstate={wstate}></Header>
            <Dashboard activemodal={activemodal} handleactivemodal={handleactivemodal} dispatch={dispatch} wstate={wstate} night={night}></Dashboard >
        </>
    );
}