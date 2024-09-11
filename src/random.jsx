import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    const randomDigits = Math.floor(100 + Math.random() * 900); // generates 3 random digits between 100 and 999
    const number = `6223${randomDigits}`;
    setRandomNumber(number);
  };

  return (
    <div>
      <h2>Random 7-Digit Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Number</button>
      {randomNumber && <p>Generated Number: {randomNumber}</p>}
    </div>
  );
};

export default RandomNumberGenerator;
