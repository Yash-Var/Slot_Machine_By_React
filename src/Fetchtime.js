import React, { useState } from "react";
import "./hooks.css";

const Fetchtime=()=>{

    let date=new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(date);
    const IncNum=()=>{
        date=new Date().toLocaleTimeString();
setCtime(date);
    };
    
    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={IncNum}>Get Time</button>
        </>
    );
};

export default Fetchtime;