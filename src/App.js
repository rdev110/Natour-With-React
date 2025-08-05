import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";
import Tours from "./components/Tours";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

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
