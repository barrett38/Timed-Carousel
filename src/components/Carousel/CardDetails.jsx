import React from "react";
import cardData from "./CardData";

const CardDetails = ({ selectedCardId }) => {
  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  if (!selectedCard) {
    return <div>No card selected</div>;
  }

  return (
    <div className="card-details">
      <h2>{selectedCard.title}</h2>
      <p>{selectedCard.longform}</p>
    </div>
  );
};

export default CardDetails;
