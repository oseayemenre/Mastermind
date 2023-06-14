import React, {useState} from "react";
import "./left.css";

const Left = () => {
    const[defaultcolor, setdefaultcolor] = useState("white");
    return(
        <div> 
            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>

            <div className="flex">
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
                <button className="circle" style = {{backgroundColor: defaultcolor}}></button>
            </div>
        </div>
    );
}

export default Left;