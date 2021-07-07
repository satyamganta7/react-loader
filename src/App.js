import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NewsWidget from "./components/NewsWidget/NewsWidget";

function App() {
  return (
    <div className="App" style={{ maxWidth: "470px", background: "#FFF" }}>
      <Sidebar />

      <div
        style={{
          height: "80px",
          background: "#f8f7f6",
          margin: "-1px",
          marginBottom: "20px",
        }}
      >
        &nbsp;
      </div>
      <NewsWidget />
      {/* <RicherLoader animate={true} background="yellow" speed="5s">
   
     
        <div style={{ height:"70px" ,width: "200px", left: "75px" }}></div>
     
        <div style={{ height: "40px", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "90%", left: "0", marginTop: "30px" }}></div>
        <div style={{ width: "90%", left: "0" }}></div>
      </RicherLoader> */}
    </div>
  );
}

export default App;
