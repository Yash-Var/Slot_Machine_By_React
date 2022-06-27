import React from 'react';
import "./App.css";

const SlotM = () => {
  let x = "😄";
  let y = "😄";
  let z = "👍";
  if (x === y && x === z) {
    return (
      <>
        <div className='slot_inner'>
          <h1>{x}{y}{z}</h1>
          <h1>This is Matching. </h1>
          <hr />
        </div>
      </>
    );
  }else{
    return (
      <>
        <div className='slot_inner'>
          <h1>{x}{y}{z}</h1>
          <h1>This is Matching. </h1>
          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className='heading_style'>🎰 Welcome to <span style={{ fontWeight: "bold", backgroundColor: "white" }}>Slot Machine</span></h1>
      <div className='slot_M'>
      <SlotM />
      <SlotM />
      <SlotM />
      </div>
    </>
  );
};
export default App;