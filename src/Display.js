import React from 'react';
import "./Display.css";

function Display({value, memory, operator}){

    return(
        <div className='display-container'>
            <p>{memory} {operator}</p>
            <p>{value}</p>
        </div>
    )
}

export default Display;