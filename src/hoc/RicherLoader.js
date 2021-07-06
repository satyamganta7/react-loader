import React from "react";
const RicherLoader = (props) => {
  console.log("children", props.children);
  //   var spin = `
  //   0% {
  //     background-position: -468px 0;
  //   }

  //   100% {
  //     background-position: 468px 0;
  //   }}
  // `;
  // return props.children.map((child) =>
  //   props.animated
  //     ? React.createElement(
  //         child.type,
  //         {
  //           style: {
  //             position: "relative",
  //             height: "8px",
  //             marginBottom: "6px",
  //             animationDuration: props.speed,
  //             animationFillMode: "forwards",
  //             animationIterationCount: "infinite",
  //             animationTimingFunction: "linear",
  //             // animationName: spin,
  //             backgroundSize: "800px 104px",
  //             animation: `${move}`,
  //             background: `linear-gradient(to right, ${props.background} 8%, #dddddd 18%, ${props.background} 33%)`,
  //             ...child.props.style,
  //           },
  //         },
  //         null
  //       )
  //     : React.createElement(
  //         child.type,
  //         {
  //           style: {
  //             ...child.props.style,
  //             position: "relative",
  //             height: "8px",
  //             marginBottom: "6px",
  //             background: props.background,
  //           },
  //         },
  //         null
  //       )
  // );

  return props.children.map((child) => {
    let left =  Object.values({...child.props.style.left}).join('')
    console.log(left)
    return props.animate
      ? child.props.className
        ? React.cloneElement(child, {
            ...child.props,
            style: {
              position: "relative",
              width:`calc(100% - ${left})`,
              marginBottom: "6px",
              animationDuration: props.speed,
              animationFillMode: "forwards",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              // animationName: spin,
              backgroundSize: "800px 104px",

              background: `linear-gradient(to right, ${props.background} 8%, #dddddd 18%, ${props.background} 33%)`,
              ...child.props.style,
            },
            className: `${child.props.className} animated`,
          })
        : React.cloneElement(child, {
            ...child.props,
            style: {
              position: "relative",
              width:`calc(100% - ${left})`,
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
          className: {...`${child.props.className} no-animation`},
        })
      : React.cloneElement(child, {
          ...child.props,
          className: `no-animation`,
        });
  });
};

export default RicherLoader;
