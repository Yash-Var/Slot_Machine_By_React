// import React from 'react';
import  ReactDOM  from 'react-dom';
import React, { useState } from "react";
import './Events.css';

const Events=()=>{
    const purple='#8e44ad';
   const [bg, setbg]=useState(purple);
   let currname='click me';
   const [name,setname]=useState(currname);
    const bgChanges=()=>{
        // console.log("clicked");
        let newbg;
        if(bg==='#8e44ad'){

             newbg='#34495e';
            setbg(newbg);   
        }else{
             newbg='#8e44ad';
            setbg(newbg);   

        }
        let newname;
        if(name==='click me'){
            newname='yash varshney 👍]';
            setname(newname);
        }else{
            newname='click me';
            setname(newname);
        }
    }
    return (
        <>
   <div style={{backgroundColor:bg}}>
    <button onClick={bgChanges}>{name}</button>

   </div>
        </>
    );
 }
export default Events; 