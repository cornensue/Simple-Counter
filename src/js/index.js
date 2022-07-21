//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0; 

//render your react application every second
setInterval(() => {

    const n6 = Math.floor(counter / 100000);
    const n5 = Math.floor(counter / 10000);
    const n4 = Math.floor(counter / 1000);
    const n3 = Math.floor(counter / 100);
    const n2 = Math.floor(counter / 10);
    const n1 = Math.floor(counter / 1);

    counter ++;
    
    ReactDOM.render(<SecondsCounter number1={n1 % 10} number2={n2 % 10}  number3={n3 % 10} 
        number4={n4 % 10} number5={n5 % 10} number6={n6 % 10}/>, document.querySelector("#app"));
}, 1000);



