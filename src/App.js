import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Movies from "./Components/movies";
import Navigation from "./Templates/Snippets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Templates/Snippets/Footer";
import Search from "./Components/Search";
const App = () => {
  return (
    <>
      <Navigation />
      <Search />

      <Footer />
    </>
  );
};

export default App;
