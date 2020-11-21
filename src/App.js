import "./App.css";
import { useContext } from "react";
import Home from "../src/components/pages/Home";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import About from "./components/pages/About";
import HeaderContext from "../src/components/context/HeaderContext";

function App() {
  let layer;
  const key = useContext(HeaderContext);
  console.log("i'm here", key);
  //layer.scrollTo(1)
  return (
    <Parallax
      pages={3}
      scrolling={false}
      horizontal
      ref={(ref) => (layer = ref)}
    >
      <ParallaxLayer offset={0} speed={0.5}>
        <Home></Home>;
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}>
        <About></About>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
