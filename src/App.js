import React from "react";
import "./App.css";
import Header from "./component/Header";
import About from "./component/About";
import Feature from "./component/Feature";
import Tours from "./component/Tours";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Booking from "./component/Booking";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <About />
      <Feature />
      <Tours />
      <Booking />
      <Footer />
    </React.Fragment>
  );
}

export default App;
