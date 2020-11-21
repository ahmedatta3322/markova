import React from "react";
import { useSpring, animated } from "react-spring";
import { Layout } from "antd";
import whitepart from "../../images/whitepart.png";
import media from "../../images/media.png";
const { Content } = Layout;
export default function Media() {
  let [box1, box2, box3, box4, box5] = [
    ["1675.23px", "709.98px", "rotate(37deg)"],
    ["1383.27px", "576.14px", "rotate(22deg)"],
    ["847px", "484px", "rotate(0deg)"],
    ["397.72px", "570.86px", "rotate(-20deg)"],
    ["149.7px", "723.19px", "rotate(-38deg)"],
  ];
  const elements = [
    "Motion grapgic ",
    "Media production",
    "Virtual reality",
    "Voiceover",
    "Videography",
  ];
  const [boxprops1, set] = useSpring((index) => ({
    left: box2[0],
    top: box2[1],
    transform: box2[2],
    fontSize: "x-large",
    zIndex: 3,
    from: {
      left: box1[0],
      top: box1[1],
      transform: box1[2],
      zIndex: 1,
      fontSize: "x-large",
    },
    delay: 3000,
    duration: 99000,
    onRest: () => {
      set({
        left: box3[0],
        top: box3[1],
        transform: box3[2],
        zIndex: 3,
        fontSize: "xx-large",
        from: {
          zIndex: 1,
          left: box2[0],
          top: box2[1],
          transform: box2[2],
          fontSize: "x-large",
        },
        delay: 3000,
        duration: 99000,
      });
    },
  }));
  const [boxprops2, setboxprops2] = useSpring((index) => ({
    left: box3[0],
    top: box3[1],
    transform: box3[2],
    fontSize: "xx-large",
    zIndex: 3,
    from: {
      left: box2[0],
      top: box2[1],
      transform: box2[2],
      zIndex: 1,
      fontSize: "x-large",
    },
    delay: 3000,
    duration: 99000,
    onRest: () => {
      setboxprops2({
        left: box4[0],
        top: box4[1],
        transform: box4[2],
        zIndex: 3,
        fontSize: "x-large",
        from: {
          zIndex: 1,
          left: box3[0],
          top: box3[1],
          transform: box3[2],
          fontSize: "xx-large",
        },
        delay: 3000,
        duration: 99000,
      });
    },
  }));
  const [boxprops3, setboxprops3] = useSpring((index) => ({
    left: box4[0],
    top: box4[1],
    transform: box4[2],
    fontSize: "x-large",
    zIndex: 3,
    from: {
      left: box3[0],
      top: box3[1],
      transform: box3[2],
      zIndex: 1,
      fontSize: "xx-large",
    },
    delay: 3000,
    duration: 99000,
    onRest: () => {
      setboxprops3({
        left: box5[0],
        top: box5[1],
        transform: box5[2],
        zIndex: 3,
        fontSize: "x-large",
        from: {
          zIndex: 1,
          left: box4[0],
          top: box4[1],
          transform: box4[2],
          fontSize: "xx-large",
        },
        delay: 3000,
        duration: 99000,
      });
    },
  }));
  const [boxprops4, setboxprops4] = useSpring((index) => ({
    left: box5[0],
    top: box5[1],
    transform: box5[2],
    fontSize: "x-large",
    zIndex: 3,
    from: {
      left: box4[0],
      top: box4[1],
      transform: box4[2],
      zIndex: 1,
      fontSize: "x-large",
    },
    delay: 3000,
    duration: 99000,
    onRest: () => {
      setboxprops4({
        left: box1[0],
        top: box1[1],
        transform: box1[2],
        zIndex: 3,
        fontSize: "x-large",
        from: {
          zIndex: 1,
          left: box5[0],
          top: box5[1],
          transform: box5[2],
          fontSize: "xx-large",
        },
        delay: 3000,
        duration: 99000,
      });
    },
  }));
  const [boxprops5, setboxprops5] = useSpring((index) => ({
    left: box1[0],
    top: box1[1],
    transform: box1[2],
    fontSize: "x-large",
    zIndex: 3,
    from: {
      left: box5[0],
      top: box5[1],
      transform: box5[2],
      zIndex: 1,
      fontSize: "x-large",
    },
    delay: 3000,
    duration: 99000,
    onRest: () => {
      setboxprops5({
        left: box2[0],
        top: box2[1],
        transform: box2[2],
        zIndex: 3,
        fontSize: "x-large",
        from: {
          zIndex: 1,
          left: box1[0],
          top: box1[1],
          transform: box1[2],
          fontSize: "xx-large",
        },
        delay: 3000,
        duration: 99000,
      });
    },
  }));
  const props = useSpring({
    opacity: 1,
    from: { opacity: -20 },
  });
  const styling = [boxprops1, boxprops2, boxprops3, boxprops4, boxprops5];
  return (
    <Content>
      <animated.img
        className="partsimg"
        src={media}
        style={props}
      ></animated.img>
      <animated.h1 className="partstext" style={props}>
        Media production
      </animated.h1>
      {elements.map((element) => {
        console.log(element);
        return (
          <animated.h1
            className="servicetitle"
            style={styling[elements.indexOf(element)]}
          >
            {element}
          </animated.h1>
        );
      })}
      <animated.img
        className="whitepart"
        src={whitepart}
        style={props}
      ></animated.img>
    </Content>
  );
}
