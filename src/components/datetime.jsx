import React from "react";
import { Zones } from "./zones";


export function Datetime({handletimezone}){
    return(
        <section className="date-container">
            
            <article>
                <h4>Choose a time zone</h4>
                    <Zones handletimezone={handletimezone}></Zones>
            </article>
        </section>
    );
}