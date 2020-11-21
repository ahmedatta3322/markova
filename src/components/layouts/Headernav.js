import React from "react";
import { Menu, Layout } from "antd";
import facebook from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import logo from "../../images/logo.png";
import pin from "../../images/pin.png";
import "../pages/home.css";
import "antd/dist/antd.css";
import HeaderContext from "../context/HeaderContext";
const { Header } = Layout;
export default function Headernav(props) {
  //const keys = [1, 2, 3, 4];
  //const key = useContext(HeaderContext);
  //const [key, setKeys] = useState(1);
  // const value = { key, setKeys };
  //console.log(key);
  return (
    <HeaderContext.Provider>
      <Header id="navheader">
        {" "}
        <a href="/">
          <img alt="" src={logo} id="logoimage"></img>
        </a>
        <Menu id="navbar" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1}>Home</Menu.Item>
          <Menu.Item key={2}>Services</Menu.Item>
          <Menu.Item key={3}>About</Menu.Item>
          <Menu.Item key={4}>Products</Menu.Item>
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
    </HeaderContext.Provider>
  );
}
