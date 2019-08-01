import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NasaCard from "./components/NasaCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="App">
        <h1>The Sky Is The Limit</h1>
      </div>
      <div>
        <NasaCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
