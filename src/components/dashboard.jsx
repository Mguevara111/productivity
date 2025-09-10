import React from "react";
import { CreateWidget } from "./createwidget.jsx";
import addicon from '../assets/icons/add_box_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import removeicon from '../assets/icons/playlist_remove_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import './dashboard.css';
import { useState } from "react";
import { Cwelement } from "./cwelement.jsx";
import { Datetimecomponent } from "./datetimecomponent.jsx";
import { Wheatercomponent } from "./weathercomponent.jsx";

const initialnote={
    keynote:'',
    contentnote:''
};

export function Dashboard({activemodal,handleactivemodal,dispatch,wstate}){
    const [idelement,setIdelement]=useState('');
    const [wshow,setWshow]=useState(false);
    const [noteedit,setNoteedit]=useState(false);   //edicion notas
    const [notevalue,setNotevalue]=useState('');    //valor el datoeditable en notas
    const [notekey,setNotekey]=useState('');
    


    const handleclosemodal=()=>{
        setIdelement('')
        setWshow(!wshow)
        setDatetime('')
    }

    const handleaddelements=(e)=>{
        setWshow(true)        
        setIdelement(e.target.dataset.id)   //id del widget pulsado
    }

    const handlechecktask=(e)=>{
       
            dispatch({
                type:'checktask',
                payload:{
                    taskid:e.target.dataset.id,
                    taskkey:e.target.dataset.key
                }
            })
            //setTaskcheck(checkstate)
    }
    
    const handleeditnote=(e)=>{
        setNoteedit(true)
        setNotekey(e.target.dataset.key)
        setNotevalue(e.target.dataset.value)
        setIdelement(e.target.dataset.id)
    }

    const handlenotevalue=(e)=>{
        setNotevalue(e.target.value)
    }

    const handlenotesubmit=(e)=>{
        setNoteedit(false)
        setNotekey('')
        setNotevalue('')
        setIdelement('')
          dispatch({
            type:'editnote',
            payload:{
                noteid:idelement,
                notekey:notekey,
                notecontent:notevalue
            }
            
        })
    }

    const handledeletenote=(e)=>{
        dispatch({
            type: 'deletenote',
            payload:{
                idnote:e.target.dataset.id,
                keynote:e.target.dataset.key
            }
            
        })
    }
    

    return(
        <>
        <section className="dashboard-container">
            <h2>Dashboard</h2>
            <article className="dash-items">
                {wstate.map(el=>
                    <div key={el.id} className="item">
                        <div className="item-title">
                            <h2 className="w-title">{el.name}</h2>
                            <div>
                                {el.type!=='Date/Time'&&el.type!=='Weather'&&<img src={addicon} alt="add-icon" data-id={el.id} className="add-icon" onClick={handleaddelements}/>}
                                <img src={removeicon} data-id={el.id} alt="remove-icon" onClick={(e)=>dispatch({type:'removewidget',payload:e.target.dataset.id})} />
                            </div>
                        </div>
                        <ul className="ul-elecontent">
                            {el.type==='Note'?
                            (el.elements.map(ele=>
                                
                                <li key={ele.key} className="li-elecontent-note">{ele.elecontent}
                                <div>
                                    {noteedit&&notekey===ele.key?<input type="text" value={notevalue} onChange={handlenotevalue} />:
                                    <>
                                    <button data-key={ele.key} data-id={el.id} className="notes-btn" data-value={ele.elecontent} onClick={handleeditnote}>✏️</button>
                                    <button data-key={ele.key} data-id={el.id}  className="notes-btn" onClick={handledeletenote}>🗑️</button>
                                    </>
                                    }
                                    
                                    </div>
                                    {noteedit&&notekey===ele.key&&<button onClick={handlenotesubmit}>Submit</button>}
                                </li>
                                
                            )):el.type==='Task'?
                                (el.elements.map(task=>
                                    <li key={task.key} className="li-elecontent-task">
                                    <input type="checkbox" data-key={task.key} data-id={el.id} onChange={handlechecktask} />
                                    <span className={task.ischecked?"crossout-task":""}>{task.elecontent}</span>
                                     </li>
                                ))
                            
                            :el.type==='Date/Time'?
                               <Datetimecomponent  timezone={el.timezone}></Datetimecomponent>
                            
                            :<Wheatercomponent key={el.id} city={el.city}></Wheatercomponent>
                            }
                           
                        </ul>
                       
                    </div>
                )}
                  
            </article>
        </section>
        {activemodal&&<CreateWidget activemodal={activemodal} handleactivemodal={handleactivemodal} dispatch={dispatch}></CreateWidget>}
        {wshow&&<Cwelement handleclosemodal={handleclosemodal} dispatch={dispatch} idelement={idelement}></Cwelement>}
        
        </>
    );
}