import React, {useState} from "react";



function App() {
const time = new Date().toLocaleTimeString();
  
const [timecap, currentTime]= useState("TIME");

function getTime(){
  const newTime = new Date().toLocaleTimeString();
  currentTime(newTime)
}
setInterval(getTime, 1000);



  return (
    <div className="container">
      <h1>{timecap}</h1>
      <button onClick={setInterval}>Get Time</button>
    </div>
  );
}

export default App;
