import React, { useState } from 'react';
import './MyComponent.css'; // Import CSS file for styling

const MyComponent = () => {
  // State and event handlers...
  // State for input value
  const [inputValue, setInputValue] = useState('');
  
  // State for text to display in H3 component
  const [displayText, setDisplayText] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for button click
  const handleButtonClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="container">
      <h1>Is State Clear Now?</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter text here" 
        className="input"
        style={{ marginBottom: '10px' }} // Adjust the margin as needed
      />
      <button onClick={handleButtonClick} className="button">Click Me</button>
      {displayText && <h3 className="display-text">{displayText}</h3>}
    </div>
  );
};

export default MyComponent;
