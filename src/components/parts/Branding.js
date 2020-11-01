import React from "react";
import { useSpring, animated } from "react-spring";
import { Layout } from "antd";
import whitepart from "../../images/whitepart.png";
import branding from "../../images/branding.png";
const { Content } = Layout;
export default function Branding() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: -20 },
  });
  return (
    <Content>
      <animated.img
        className="partsimg"
        src={branding}
        style={props}
      ></animated.img>
      <animated.h1 className="partstext" style={props}>
        Branding & Identity
      </animated.h1>
      <animated.img
        className="whitepart"
        src={whitepart}
        style={props}
      ></animated.img>
    </Content>
  );
}
