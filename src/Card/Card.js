// Card.js

import React from 'react';

const Card = ({ img, name, price, isSold }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={name} />
        {isSold && <span className="sold-badge">Sold out</span>}
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
