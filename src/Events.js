// import React from 'react';
import  ReactDOM  from 'react-dom';
import React, { useState } from "react";
import './Events.css';

const Events=()=>{
    const purple='#8e44ad';
   const [bg, setbg]=useState(purple);
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
    }
    return (
        <>
   <div style={{backgroundColor:bg}}>
    <button onClick={bgChanges}> Click Me </button>

   </div>
        </>
    );
 }
export default Events; 