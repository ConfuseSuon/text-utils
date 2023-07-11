import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Learn from "./Learn";
import React, { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(false);



  return (
    <div style={{
      height: '100vh',
      background: mode? 'black' : 'white'
    }}>
    
      <Navbar title="TextUtils" aboutText="About us" mode={mode} setMode={setMode}/>
      {/* <Navbar/> */}
      <div className="container">
        {/* <Learn /> */}
        <TextForm heading="Enter the text to anaylze below" mode={mode} setMode={setMode} />
        {/* <About /> */}
      </div>
    </div>
  );
};

export default App;
