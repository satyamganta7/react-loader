import RicherLoader from "./hoc/RicherLoader";
import "./App.css";
import Facebook from "./containers/Facebook/Facebook";

function App() {
  return (
    <div className="App">
      {/* <RicherLoader>
        <Facebook />
      </RicherLoader> */}

      <RicherLoader animated={true} background="yellow" speed="15s">
        {/* <div
          style={{
            minHeight: "100px",
            position: "relative",
            backgroundColor: "yellow",
            padding: "10px",
            maxWidth: "475px",
            margin: "0 auto",
            marginTop: "30px",
          }}
        > */}
          <div
            style={{
              height: "40px",
              width: "40px",
              position: "absolute",
              borderRadius: "100px",
              top: "10px",
            }}
          ></div>
          <div style={{ width: "70%", left: "50px" }}></div>
          <div style={{ width: "40%", left: "50px" }}></div>
          <div style={{ width: "40%", left: "50px" }}></div>
          <div style={{ width: "40%", left: "50px" }}></div>
          <div style={{ width: "40%", left: "50px" }}></div>
          <div style={{ width: "90%", left: "0", marginTop: "30px" }}></div>
          <div style={{ width: "90%", left: "0" }}></div>
        {/* </div> */}
      </RicherLoader>
    </div>
  );
}

export default App;
