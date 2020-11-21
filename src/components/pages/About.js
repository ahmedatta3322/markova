import React from "react";
import Headernav from "../layouts/Headernav";

export default function About(props) {
  return (
    <div>
      <div>Hey you</div>
      <Headernav parallax={props.parallax}></Headernav>
    </div>
  );
}
