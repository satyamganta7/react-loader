import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import RicherLoader from "../../hoc/RicherLoader";

const Sidebar = (props) => (
  <RicherLoader animate={true} background="#eeeeee" speed="1.5s">
    <div className={[classes.default, classes.image].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.lastLine].join(" ")}></div>
  </RicherLoader>
);
export default Sidebar;
