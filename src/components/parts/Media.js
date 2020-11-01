import React from "react";
import { useSpring, animated } from "react-spring";
import { Layout } from "antd";
import whitepart from "../../images/whitepart.png";
import media from "../../images/media.png";
const { Content } = Layout;
export default function Media() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: -20 },
  });
  return (
    <Content>
      <animated.img
        className="partsimg"
        src={media}
        style={props}
      ></animated.img>
      <animated.h1 className="partstext" style={props}>
        Media Production
      </animated.h1>
      <animated.img
        className="whitepart"
        src={whitepart}
        style={props}
      ></animated.img>
    </Content>
  );
}
