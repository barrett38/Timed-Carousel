import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import the CSS file for custom styles

// React component for rendering individual cards
const Card = ({ title, content, image }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Carousel = ({ cardData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    centerMode: true,
    centerPadding: "0px", // Ensure no padding
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px", // Ensure no padding
          autoplay: true, // Enable autoplay
          autoplaySpeed: 6000, // Set autoplay speed > 1000 is 1 second
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px", // Ensure no padding
          autoplay: true, // Enable autoplay
          autoplaySpeed: 6000, // Set autoplay speed to 3 seconds
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
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
