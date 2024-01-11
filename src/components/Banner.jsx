import React from "react";

const Banner = (props) => {
  return (
    <div style={{ fontFamily: "cursive" }}>
      <h3>{props.title}</h3>
      <p style={{ color: "#AA336A", display: "inline-block" }}>{props.art}</p>
      <p style={{ color: "	#598BAF", display: "inline-block" }}>{props.date}</p>
    </div>
  );
};

export default Banner;
