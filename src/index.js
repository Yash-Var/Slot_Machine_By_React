import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App.js";
import Hooks from "./Hooks.js";
import Fetchtime from "./Fetchtime.js";
import "./hooks.css";
import CurrentTime from "./CurrentTime.js";
ReactDOM.render(
  <>
   <App />
   <CurrentTime />
   <Hooks />
<Fetchtime />
  </>,document.getElementById('root')
);