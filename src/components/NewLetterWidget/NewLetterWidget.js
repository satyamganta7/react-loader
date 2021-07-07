import React, { Fragment } from "react";
import classes from "./NewLetterWidget.module.css";
import RicherLoader from "../../hoc/RicherLoader";

const NewLetterWidget = (props) => (
  <RicherLoader animate={true} background="#eee" speed="1.5s">
    <div className={[classes.default, classes.firstLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
    <div className={[classes.default, classes.commonLine].join(" ")}></div>
  </RicherLoader>
);
export default NewLetterWidget;
