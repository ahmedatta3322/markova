import React, { useState, initialState, useContext } from "react";

import "./home.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";

import model from "../../images/model.png";
import Digital from "../../components/parts/Digital";
import Branding from "../parts/Branding";
import Media from "../parts/Media";
import Website from "../parts/Website";
import Headernav from "../layouts/Headernav";
import HeaderContext from "../context/HeaderContext";
const { Footer, Content } = Layout;

//const initialState = <Digital></Digital>;

export default function Home(props) {
  const [state, setstate] = useState(initialState);
  const page = useContext(HeaderContext);
  console.log(page);
  const digitalclick = () => {
    setstate(1);
    console.log("here", state, page);
    //return <Digital></Digital>;
  };
  const brandingclick = () => {
    setstate(2);
  };
  const mediaclick = () => {
    setstate(3);
  };
  const webclick = () => {
    setstate(4);
  };
  return (
    <Layout id="home">
      <Headernav parallax={props.parallax}></Headernav>
      {state === undefined && (
        <Content>
          <h1 className="introtext">
            You're in <span>Markova</span> Planet
          </h1>
          <h1 className="introtext" id="readytext">
            Are you ready ?
          </h1>
          <img alt="" id="model" src={model}></img>
        </Content>
      )}
      {state === 1 && <Digital></Digital>}
      {state === 2 && <Branding></Branding>}
      {state === 3 && <Media></Media>}
      {state === 4 && <Website></Website>}
      <Footer id="footer">
        <Menu id="navfooter" mode="horizontal">
          <Menu.Item id="item1">
            <Button className="footernavbtn" onClick={digitalclick}>
              Digital Marketing
            </Button>
          </Menu.Item>
          <Menu.Item id="item2">
            <Button className="footernavbtn" onClick={brandingclick}>
              Branding & Identity
            </Button>
          </Menu.Item>
          <Menu.Item id="item3">
            <Button className="footernavbtn" onClick={mediaclick}>
              Media Production
            </Button>
          </Menu.Item>
          <Menu.Item id="item4">
            <Button className="footernavbtn" onClick={webclick}>
              Website & Mobile Development
            </Button>
          </Menu.Item>
        </Menu>
      </Footer>
    </Layout>
  );
}
