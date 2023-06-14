import React, {useState} from "react";
import "./bottom.css";

const Bottom = () => {

    function setColor(color) {
        return color;
    }
    return(
        <div className="bottom">
            <div className="yellow" onClick={() => setColor(yellow)}></div>
            <div className="lime" onClick={() => setColor(lime)}></div>
            <div className="purple" onClick={() => setColor(purple)}></div>
            <div className="red" onClick={() => setColor(red)}></div>
            <div className="blue" onClick={() => setColor(blue)}></div>
            <div className="green" onClick={() => setColor(green)}></div>
        </div>
    );
}

export default Bottom;