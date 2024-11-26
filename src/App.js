import React from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import cardData from "./components/Carousel/CardData";

function App() {
  return (
    <div className="App">
      <h2>Comapny Name</h2>
      <Carousel cardData={cardData} />
    </div>
  );
}

export default App;
