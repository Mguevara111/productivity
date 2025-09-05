import React from "react";
import addicon from '../assets/icons/dashboard_customize_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import dayicon from '../assets/icons/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import darkicon from '../assets/icons/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import dogtech from '../assets/images/logo_dogtech_web.png';
import { Search } from "./search";
import './header.css';

export function Header({dispatch,handleactivemodal}){
   return( <section className="header-container">
        
            <img src={dogtech} alt="logo" className="logo"/>
            <Search></Search>
        
        <div className="icons">
            <img src={addicon} alt="add-icon" className="addicon" onClick={handleactivemodal}/>
            <div>
                <img src={dayicon} alt="day-icon" className="dayicon"/>
                <img src={darkicon} alt="dark-icon" className="darkicon"/>
            </div>
            
            
            
        </div>
    </section>
   );
}