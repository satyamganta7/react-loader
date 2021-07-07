import React, { Fragment } from "react";
import classes from "./BoxWidget.module.css";
import RicherLoader from "../../hoc/RicherLoader";

const BoxWidget = (props) => (
  <RicherLoader animate={true} background="#eeeeee" speed="1.5s">
    <div style={{height:"8px", marginBottom:"10px"}}></div>
    <div style={{height:"20px", marginBottom:"70px"}}></div>
  </RicherLoader>
);
export default BoxWidget;
