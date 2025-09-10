import React from "react";
import { Zones } from "./zones";
import './datetime.css'

export function Datetime({handletimezone}){
    return(
        <section className="date-container">
            
            <article className="zones-selection">
                <h4>Choose a time zone</h4>
                    <Zones handletimezone={handletimezone}></Zones>
            </article>
        </section>
    );
}