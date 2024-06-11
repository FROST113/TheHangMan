import React from 'react';

const GameBoard = ({ guessedLetters, onLetterClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="game-board">
      {alphabet.split('').map((letter, index) => (
        <button
          key={index}
          onClick={() => onLetterClick(letter)}
          className={`letter-button ${guessedLetters.includes(letter) ? 'guessed' : ''}`}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}


export default GameBoard;
