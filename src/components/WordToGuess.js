import React from 'react';

const WordToGuess = ({ wordToGuess, guessedLetters }) => {
  const wordArray = wordToGuess.split('');

  return (
    <div className="word-to-guess">
      {wordArray.map((letter, index) => (
        <span key={index} className="word-letter">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default WordToGuess;
