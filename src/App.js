import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Card from './Card/Card.js';
import MyComponent from './State and Event/MyComponent.js';

function App() {
  // Initial shoes state
  const [shoes, setShoes] = useState([
    { img: 'images/shoe 1.jpg', name: 'LOGO 9539 BKA', price: 'Rs. 17,500', isSold: false },
    { img: 'images/shoe 2.jpg', name: 'LOGO 9540 BKA', price: 'Rs. 12,500', isSold: true },
    { img: 'images/shoe 3.jpg', name: 'LOGO 9541 BKA', price: 'Rs. 18,500', isSold: false },
    { img: 'images/shoe 4.jpg', name: 'LOGO 9542 BKA', price: 'Rs. 12,500', isSold: false },
    { img: 'images/shoe 5.jpg', name: 'LOGO 9543 BKA', price: 'Rs. 20,500', isSold: false },
    { img: 'images/shoe 6.jpg', name: 'LOGO 9544 BKA', price: 'Rs. 23,500', isSold: false }
  ]);

  // Function to change all shoes
  const changeAllShoes = () => {
    // Update shoes state with new shoe data
    setShoes([
      { img: 'images/new-shoe-1.jpg', name: 'LOGO 9539 BKA', price: 'Rs. 20,000', isSold: false },
      { img: 'images/new-shoe-2.jpg', name: 'LOGO 9540 BKA', price: 'Rs. 25,000', isSold: false },
      { img: 'images/new-shoe-3.jpg', name: 'LOGO 9541 BKA', price: 'Rs. 22,000', isSold: false },
      { img: 'images/new-shoe-4.jpg', name: 'LOGO 9542 BKA', price: 'Rs. 22,000', isSold: true },
      { img: 'images/new-shoe-5.jpg', name: 'LOGO 9543 BKA', price: 'Rs. 20,500', isSold: false },
      { img: 'images/new-shoe-6.jpg', name: 'LOGO 9544 BKA', price: 'Rs. 23,500', isSold: false }
    ]);
  };

  return (
    <div>
      <Header />
      <div className="cards-container">
        {shoes.map((shoe, index) => (
          <Card
            key={index}
            img={shoe.img}
            name={shoe.name}
            price={shoe.price}
            isSold={shoe.isSold}
          />
        ))}
      </div>
      <button className = "button" onClick={changeAllShoes}>Change All Shoes</button>
      <MyComponent/>
    </div>
  );
}

export default App;
