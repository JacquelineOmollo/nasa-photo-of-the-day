import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import NasaCard from "./components/NasaCard";
import NasaPics from "./components/NasaPics";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container className="app" fluid>
      <div>
        <Headers />

        <div>
          <NasaCard />
          <NasaPics />
        </div>
      </div>
    </Container>
  );
}

export default App;
