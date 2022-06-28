import React, { useState } from "react";
import "./hooks.css";



const Hooks = () => {
    // const state = useState();
    // console.log(state);
 const [count,setCount]=useState(0);
    // let count = 1;
    const IncNum = () => {
        setCount(count+1);
        // console.log('clicked');
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click me</button>
        </>
    );
};
export default Hooks;