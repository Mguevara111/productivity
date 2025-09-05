import React from "react";
import { useState } from "react";
import { Datetime } from "./datetime";
import './createwidget.css';

const widgettype=['---','Task','Note','Date/Time','Wheater'];

const initialwdget={
    type:'',
    content:''
};

export function CreateWidget({handleactivemodal,dispatch,handletimezone}){
    const [widget,setWidget]=useState(initialwdget);
    const [selectwidget,setSelectwidget]=useState(false);
    const [showzones,setShowzones]=useState(false);
    
    
    const putwidgetname=(e)=>{
        //console.log(e.target.value)
        setWidget({...widget,type:e.target.value})
        setSelectwidget(true)
        if(e.target.value==='Date/Time'){
            setShowzones(true)
            
        }else{
            setShowzones(false)
        }
    }

    const handlewidgetname=(e)=>{
        setWidget({...widget,content:e.target.value})
    }

    const handlesubmit=()=>{
        if(widget.content!==''){
            //console.log('handlesubmit')
            dispatch({type:'addwidget',payload:widget})
            handleactivemodal()
        }else{
            alert('you must add a widget name')
        }
        
    }

    
    return(
            
        <aside className="widget-data">
            <div className="widget-data-content"></div>
            
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
            <button onClick={handlesubmit} className="modal-button">Submit</button>
            </>
            }
            </article>
        
        </aside>  

    );
}