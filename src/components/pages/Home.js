import React, { useState, initialState } from "react";

import "./home.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import logo from "../../images/logo.png";
import facebook from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import pin from "../../images/pin.png";
import model from "../../images/model.png";
import Digital from "../../components/parts/Digital";
import Branding from "../parts/Branding";
import Media from "../parts/Media";
import Website from "../parts/Website";
const { Header, Footer, Content } = Layout;

//const initialState = <Digital></Digital>;

export default function Home() {
  const [state, setstate] = useState(initialState);
  const digitalclick = () => {
    setstate(1);
    console.log("here", state);
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
      <Header id="navheader">
        {" "}
        <a href="/">
          <img alt="" src={logo} id="logoimage"></img>
        </a>
        <Menu id="navbar" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2" disabled>
            Services
          </Menu.Item>
          <Menu.Item key="3" disabled>
            About
          </Menu.Item>
          <Menu.Item key="4" disabled>
            Products
          </Menu.Item>
        </Menu>
        <Menu id="socials" mode="horizontal">
          <Menu.Item key="1">
            <img alt="" src={facebook}></img>
          </Menu.Item>
          <Menu.Item key="2">
            <img alt="" src={twitter}></img>
          </Menu.Item>
          <Menu.Item key="3">
            <img alt="" src={pin}></img>
          </Menu.Item>
        </Menu>
      </Header>
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
