import React from "react";
import { useSpring, animated } from "react-spring";
import { Layout } from "antd";
import whitepart from "../../images/whitepart.png";
import web from "../../images/web.png";
const { Content } = Layout;
export default function Website() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: -20 },
  });
  return (
    <Content>
      <animated.img className="partsimg" src={web} style={props}></animated.img>
      <animated.h1 className="partstext" style={props}>
        Website & Mobile <br></br>
        <span
          style={{ marginLeft: "2vw", color: "#ffd366", textAlign: "center" }}
        >
          Development
        </span>
      </animated.h1>
      <animated.img
        className="whitepart"
        src={whitepart}
        style={props}
      ></animated.img>
    </Content>
  );
}
