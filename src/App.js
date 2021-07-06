import RicherLoader from "./hoc/RicherLoader";
import "./App.css";
import Facebook from "./containers/Facebook/Facebook"


function App() {
  return (
    <div className="App" style={{ maxWidth: "470px"}}>
   {/* <Facebook/> */}

      <RicherLoader animate={true} background="yellow" speed="5s">
   
     
        <div style={{ height:"70px" ,width: "200px", left: "75px" }}></div>
     
        <div style={{ height: "40px", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "90%", left: "0", marginTop: "30px" }}></div>
        <div style={{ width: "90%", left: "0" }}></div>
       {/* <p>helo</p> */}
      </RicherLoader>
      {/* <Facebook/> */}
    </div>
  );
}

export default App;
