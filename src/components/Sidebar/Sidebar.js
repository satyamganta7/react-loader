import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import RicherLoader from "../../hoc/RicherLoader";

const Sidebar = (props) => (
  <RicherLoader animate={false} background="yellow" speed="1.5s">
    <div className={[classes.default, classes.image].join(" ")}></div>
    <div className={[classes.default, classes.firstHeader].join(" ")}></div>
    <div className={[classes.default, classes.secondHeader].join(" ")}></div>
    <div className={[classes.default, classes.firstLine].join(" ")}></div>
    <div className={[classes.default, classes.secondLine].join(" ")}></div>
    <div className={[classes.default, classes.thirdLine].join(" ")}></div>
  </RicherLoader>
);
export default Sidebar;
