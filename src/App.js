import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";

import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import Messagebanner from "./components/Messagebanner/Messagebanner";
import About from "./pages/about/about";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
//import Slide from "react-reveal/Slide";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Mynavbar />
      <Mycarousel />
      <Messagebanner />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
