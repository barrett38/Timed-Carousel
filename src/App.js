import React from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";

// Sample data for random content
const cardData = [
  { id: 1, title: "Card 1", content: "This is the content of Card 1." },
  { id: 2, title: "Card 2", content: "This is the content of Card 2." },
  { id: 3, title: "Card 3", content: "This is the content of Card 3." },
  { id: 4, title: "Card 4", content: "This is the content of Card 4." },
  { id: 5, title: "Card 5", content: "This is the content of Card 5." },
  { id: 6, title: "Card 6", content: "This is the content of Card 6." },
  { id: 7, title: "Card 7", content: "This is the content of Card 7." },
];

function App() {
  return (
    <div className="App">
      <h2>Carousel of Random Cards</h2>
      <Carousel cardData={cardData} />
    </div>
  );
}

export default App;
