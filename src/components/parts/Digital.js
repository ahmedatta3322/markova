import React from "react";
import { useSpring, animated } from "react-spring";

import digital from "../../images/digital.png";
import whitepart from "../../images/whitepart.png";
import { Layout } from "antd";
import "./parts.css";
const { Content } = Layout;
export default function Digital() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: -20 },
  });
  return (
    <Content>
      <animated.img
        className="partsimg"
        src={digital}
        style={props}
      ></animated.img>
      <animated.h1 className="partstext" style={props}>
        Digital Marketing
      </animated.h1>
      <animated.img
        className="whitepart"
        src={whitepart}
        style={props}
      ></animated.img>
    </Content>
  );
}
