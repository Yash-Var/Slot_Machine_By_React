import React, { useState } from "react";
import "./hooks.css";

const CurrentTime = () => {

    let date = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(date);
    const UpdateTime = () => {
        date = new Date().toLocaleTimeString();
        setCtime(date);
    };

    setInterval(UpdateTime, 1000);
    return (
        <>
            <h1>{ctime}</h1>
        </>
    );
};

export default CurrentTime;