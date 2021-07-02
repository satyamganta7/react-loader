import React from "react";
const RicherLoader = (props) => {
  console.log("children", props.children);
  
  return props.children.map((child) =>
    props.animated
      ? React.createElement(
          child.type,
          {
            style: {
              position: "relative",
              height: "8px",
              marginBottom: "6px",
              animationDuration: props.speed,
              animationFillMode: "forwards",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              animationName: "move",
              backgroundSize: "800px 104px",
              animation: ` {
                0% {
                  background-position: -468px 0;
                }
              
                100% {
                  background-position: 468px 0;
                }
              } `,
              background: `linear-gradient(to right, ${props.background} 8%, #dddddd 18%, ${props.background} 33%)`,
              ...child.props.style,
            },
          },
          null
        )
      : React.createElement(
          child.type,
          {
            style: {
              ...child.props.style,
              position: "relative",
              height: "8px",
              marginBottom: "6px",
              background: props.background,
            },
          },
          null
        )
  );
};

export default RicherLoader;
