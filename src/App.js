import React, { Fragment } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NewsWidget from "./components/NewsWidget/NewsWidget";
import BoxWidget from "./components/BoxWidget/BoxWidget";
import NewLetterWidget from "./components/NewLetterWidget/NewLetterWidget";
import FaceBookWidget from "./components/FaceBookWidget/FaceBookWidget";
import InstagramWidget from "./components/InstagramWidget/InstagramWidget";

function App() {
  return (
    <Fragment>
    <div className="container-lg mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="widgetBox">
              <Sidebar />
            </div>
            <div className="widgetBox">
                <InstagramWidget />
            </div>
            <div className="widgetBox">
              <InstagramWidget />
            </div>
          </div>

          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
              <div className="widgetBox">
                <BoxWidget />
              </div>
              </div>
              <div className="col-md-6">
              <div className="widgetBox">
                <BoxWidget />
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              <div className="widgetBox">
                <BoxWidget />
              </div>
              </div>
              <div className="col-md-6">
              <div className="widgetBox">
                <BoxWidget />
              </div>
              </div>
            </div>
            <div className="widgetBox">
                <FaceBookWidget />
              </div>
              <div className="widgetBox">
                <FaceBookWidget />
              </div>
          </div>

          <div className="col-md-4">
            <div className="widgetBox">
            <NewLetterWidget />
            </div>            
            <div className="widgetBox">
              <NewsWidget />
            </div>
          </div>
        </div>
      </div>

    {/* <div className="widgetBox"> 
       <RicherLoader animate={true} background="yellow" speed="5s"> 
        <div style={{ height:"70px" ,width: "200px", left: "75px" }}></div>
        <div style={{ height: "40px", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "40%", left: "50px" }}></div>
        <div style={{ width: "90%", left: "0", marginTop: "30px" }}></div>
        <div style={{ width: "90%", left: "0" }}></div>
      </RicherLoader>
    </div> */}
    </Fragment>
  );
}

export default App;
