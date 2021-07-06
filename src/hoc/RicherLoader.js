import React from "react";
const RicherLoader = (props) => {
  console.log("children", props.children);

  return props.children.map((child) => {
    let left = child.props.style
      ? Object.values({ ...child.props.style.left }).join("")
      : "0px";
    console.log(left);
    return props.animate
      ? child.props.className
        ? React.cloneElement(child, {
            ...child.props,
            style: {
              //position: "relative",
              width:`calc(${child.props.width} - ${left})`,
              marginBottom: "6px",
              animationDuration: props.speed,
              animationFillMode: "forwards",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              // animationName: spin,

              background: `linear-gradient(to right, ${props.background} 8%, #dddddd 18%, ${props.background} 33%)`,
              backgroundSize: "800px 104px",
              ...child.props.style,
            },
            className: `${child.props.className} animated`,
          })
        : React.cloneElement(child, {
            ...child.props,
            style: {
              //position: "relative",
               width:`calc(${child.props.width} - ${left})`,
              animationDuration: props.speed,
              animationFillMode: "forwards",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              // animationName: spin,

              background: `linear-gradient(to right, ${props.background} 8%, #dddddd 18%, ${props.background} 33%)`,
              backgroundSize: "800px 104px",
              ...child.props.style,
            },
            className: `animated`,
          })
      : child.props.className
      ? React.cloneElement(child, {
          ...child.props,
          style: {
            width:`calc(${child.props.width} - ${left})`,
            background: props.background,
          },
          className: `${child.props.className} no-animation`,
        })
      : React.cloneElement(child, {
          ...child.props,
          style: {
            width:`calc(${child.props.width} - ${left})`,
            background: props.background,
          },
          className: `no-animation`,
        });
  });
};

export default RicherLoader;
