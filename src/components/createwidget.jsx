import React from "react";
import { useState,useEffect } from "react";
import { Datetime } from "./datetime";
import './createwidget.css';
import { Citylist } from "./citylist";

const widgettype=['---','Task','Note','Date/Time','Weather'];

const initialwdget={
    type:'',
    content:''
};

export function CreateWidget({handleactivemodal,dispatch}){
    const [widget,setWidget]=useState(initialwdget);
    const [selectwidget,setSelectwidget]=useState(false);
    const [showzones,setShowzones]=useState(false);
    const [datetime,setDatetime]=useState('');      //zona horaria seleccionada
    const [showcities,setShowcities]=useState(false);
    

    useEffect(()=>{
        if(datetime!==''){
                //console.log('si hay datetime')
                setWidget({...widget,timezone:datetime})
        }
    },[datetime])

    const putwidgetname=(e)=>{
        //console.log(e.target.value)
        setWidget({...widget,type:e.target.value})
        setSelectwidget(true)
        switch (e.target.value) {
            case 'Date/Time':
                setShowzones(true)
                setShowcities(false)  
                break;
            case 'Weather':
                setShowcities(true)
                setShowzones(false)
                break;
            default:
                setShowzones(false)
                setShowcities(false)
                break;
        }
    
    }

    const handlewidgetname=(e)=>{
            setWidget({...widget,content:e.target.value})
    }

    const handlesubmit=()=>{
        if(widget.content!==''){
            //console.log(widget)
            dispatch({type:'addwidget',payload:widget})
            setDatetime('')
            handleactivemodal()
        }else{
            alert('you must add a widget name')
        }
        
    }

     const handletimezone=(zona)=>{
        setDatetime(zona)
    }

    const handleselectcity=(cityr)=>{
        
        setWidget({...widget,city:cityr})
    }

    
    return(
            
        <aside className="widget-data">
            <div className="widget-data-content">
            
            <div className="close-modal-btn">
                <button onClick={handleactivemodal} className="close-modalbtn">X</button>
            </div>
            <article className="input-data-widget">
            <select name="" id=""  onChange={putwidgetname} className="modal-select">
                {widgettype.map((el,index)=>
                    <option value={el} key={index}>{el}</option>
                )}
            </select>
            {selectwidget&&
            <>
            <label>
            <p className="modal-name">Put {widget.type} name:</p>
            <input type="text" onChange={handlewidgetname} value={widget.content} className="modal-input"/>
            </label>
            {showzones&&<Datetime handletimezone={handletimezone}></Datetime>}
            {showcities&&<Citylist handleselectcity={handleselectcity}></Citylist>}
            <button onClick={handlesubmit} className="modal-button">Submit</button>
            </>
            }
            </article>
            </div>
        </aside>  

    );
}