import React, { useState, useEffect } from "react";
import './Dropdown.scss'

function Dropdown(){
    return(
        <div className="Dropdown">
            <button className="dropbtn">Dropdown</button>
          
            <div className="dropdown-content">
                <a href="#1">Link 1</a>
                <a href="#2">Link 2</a>
                <a href="#3">Link 3</a>
            </div>

        </div>

    );
    
}

export default Dropdown;