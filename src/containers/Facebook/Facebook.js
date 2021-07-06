import React, { Fragment } from "react";
import styles from "./Facebook.css";
import RicherLoader from "../../hoc/RicherLoader";

const Facebook = (props) => (
  <RicherLoader animate={false}>
    {/* <div
      style={{
        height: "40px",
        width: "40px",
        position: "absolute",
        borderRadius: "100px",
        top: "10px",
      }}
    ></div> */}
    <div style={{  width: "70px", left: "50px" }}></div>
    <div style={{ width: "40px", left: "50px" }}></div>
    <div style={{ width: "40px", left: "50px" }}></div>
    <div style={{ width: "40px", left: "50px" }}></div>
    <div style={{ width: "40px", left: "50px" }}></div>
    <div style={{ width: "90px", left: "0", marginTop: "30px" }}></div>
    <div style={{ width: "90px", left: "0" }}></div>
  </RicherLoader>
);
export default Facebook;
