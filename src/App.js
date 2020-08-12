import React from "react";
import Clock from "react-live-clock";
import "./App.css";

var ReactFitText = require("react-fittext");
let currDate = new Date();
let greeting;
currDate = currDate.getHours();
if (currDate >= 4 && currDate < 12) {
  greeting = "GOOD MORNING";
} else if (currDate >= 12 && currDate < 18) {
  greeting = "GOOD AFTERNOON";
} else {
  greeting = "GOOD EVENING";
}

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "whitesmoke", fontSize: "40px" }}>HELLO MUKUL</h1>
      <h1 style={{ color: "whitesmoke", fontSize: "30px" }}>{greeting}</h1>
      <h2 style={{ color: "whitesmoke" }}>{new Date().toLocaleDateString()}</h2>
      <ReactFitText compressor={0.7}>
        <h1 style={{ color: "whitesmoke" }}>
          <Clock format="HH:mm:ss" interval={1000} ticking={true} />
        </h1>
      </ReactFitText>
      <div class="gcse-search"></div>
    </div>
  );
}

export default App;
