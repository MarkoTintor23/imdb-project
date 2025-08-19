import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Movies from "./Components/movies";
import Navigation from "./Templates/Snippets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Templates/Snippets/Footer";
const App = () => {
  return (
    <>
      <Navigation />
      <Movies />
      <Footer />
    </>
  );
};

export default App;
