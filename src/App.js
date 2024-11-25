import React from "react";
import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

// React component for rendering individual cards
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <h2>Carousel of Random Cards</h2>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
