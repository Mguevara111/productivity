import React from "react";
import { Header } from "./header";
import { Dashboard } from "./dashboard";
import { useReducer,useState } from "react";
import { Reducer } from "./reducer.js";
import { widgets } from "./base.js";


export function Mainprod(){
    const [activemodal,setActivemodal]=useState(false);
    const [wstate,dispatch]=useReducer(Reducer,widgets)

    const handleactivemodal=()=>{
        setActivemodal(!activemodal)
    }
    return(
        <>
            <Header dispatch={dispatch} handleactivemodal={handleactivemodal}></Header>
            <Dashboard activemodal={activemodal} handleactivemodal={handleactivemodal} dispatch={dispatch} wstate={wstate}></Dashboard >
        </>
    );
}