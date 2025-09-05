import { useState } from "react";
import './cwelement.css';
/*aqui se crea el contenido interno de los wdget, es otro modal*/

export function Cwelement({handleclosemodal,dispatch,idelement}){
    const [elementw,setElementw]=useState('')

    const handleelement=(e)=>{
        setElementw(e.target.value)
    }

    const handlecreate=()=>{
        if(elementw!==''){
            const newele={
                id:idelement,
                key:crypto.randomUUID(),
                elecontent:elementw
            }
            dispatch({
                type:'addelement',
                payload:newele
            })
            handleclosemodal()
        }else{
            alert('you must add a text')
        }
        
        
    }
    return(
        <section className="create-element-container">
            <article className="create-element-subco">
            <div className="modal-widget-close">
                <button onClick={handleclosemodal} className="modal-widget-btn">X</button>
            </div>
            <h3>Add element name:</h3>
            {/* <label htmlFor="inputele">
                Put your: */}
                <input type="text" id="inputele" onChange={handleelement} value={elementw} className="modal-widget-input"/>
            {/* </label> */}
            <button onClick={handlecreate} className="modal-widget-create">Create</button>
            </article>
        </section>
    );
} 