import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import CardDetails from "./CardDetails";

// React component for rendering individual cards
const Card = ({ title, content, image, onClick }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Carousel = ({ cardData }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Disable default arrows
    centerMode: true,
    centerPadding: "0px",
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: false, // Disable default arrows for this breakpoint
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: false, // Disable default arrows for this breakpoint
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="carousel-slide">
            <Card
              title={card.title}
              content={card.content}
              image={card.image}
              onClick={() => setSelectedCardId(card.id)}
            />
          </div>
        ))}
      </Slider>
      {selectedCardId && <CardDetails selectedCardId={selectedCardId} />}
    </div>
  );
};

export default Carousel;
