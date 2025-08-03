import React from "react";
import "./App.css";
import Header from "./component/Header";
import About from "./component/About";
import Feature from "./component/Feature";
import Tours from "./component/Tours";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Feature />
      <Tours />
    </React.Fragment>
  );
}

export default App;
