import React from "react";
import "./App.css";
import Header from "./components/Header";
import NasaCard from "./components/NasaCard";
import Footer from "./components/Footer";
import NasaPics from "./components/NasaPics";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="App">
        <h1>The Sky Is The Limit</h1>
        <h2>this isn't working</h2>
      </div>
      <div className="cards">
        <NasaCard />
        <NasaPics />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
