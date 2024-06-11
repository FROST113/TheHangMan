import React from 'react';
import hangman1 from '../images/state1.GIF';
import hangman2 from '../images/state2.GIF';
import hangman3 from '../images/state3.GIF';
import hangman4 from '../images/state4.GIF';
import hangman5 from '../images/state5.GIF';
import hangman6 from '../images/state6.GIF';
import hangman7 from '../images/state7.GIF';
import hangman8 from '../images/state8.GIF';
import hangman9 from '../images/state9.GIF';
import hangman10 from '../images/state10.gif';
import hangman11 from '../images/state11.GIF';

const HangmanDrawing = ({ incorrectGuesses, maxIncorrectGuesses }) => {
  // Ensure the image index stays within the correct range
  let imageIndex = incorrectGuesses;

  if (imageIndex < 1) {
    imageIndex = 1;
  } else if (imageIndex > maxIncorrectGuesses) {
    imageIndex = maxIncorrectGuesses;
  }

  // Create an array of images for easy access
  const hangmanImages = [
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
    hangman8,
    hangman9,
    hangman10,
    hangman11,
  ];

  return (
    <div className="hangman-drawing">
      <img src={hangmanImages[imageIndex - 1]} alt={`Hangman drawing ${imageIndex}`} />
    </div>
  );
}

export default HangmanDrawing;
