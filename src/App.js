import React from "react";
import "./App.css";

import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import Messagebanner from "./components/Messagebanner/Messagebanner";

function App() {
  return (
    <div>
      <Mynavbar />
      <Mycarousel />
      <Messagebanner />
    </div>
  );
}

export default App;
