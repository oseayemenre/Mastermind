import React from "react";
import Left from "./components/left-side/left";
import Right from "./components/right-side/right";
import Bottom from "./components/bottom/bottom";
import "./app.css";

const App = () => {
    return(
        <div className="app">
            <h1 className="title">Mastermind</h1>
            <Left/>
            <Right/>
            <Bottom/>
        </div>
    );
}

export default App;