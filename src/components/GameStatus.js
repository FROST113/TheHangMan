import React from 'react';

const GameStatus = ({ wordToGuess, guessedLetters, onRestart }) => {
  const isGameOver = checkGameOver(wordToGuess, guessedLetters);

  const handleRestartClick = () => {
    // Call the provided onRestart function to restart the game
    onRestart();
  };

  return (
    <div className="game-status">
      {isGameOver ? (
        <div>
          {isWordGuessed(wordToGuess, guessedLetters) ? (
            <p>You won! The word was "{wordToGuess}".</p>
          ) : (
            <p>You lost! The word was "{wordToGuess}".</p>
          )}
          <button onClick={handleRestartClick}>Restart</button>
        </div>
      ) : (
        <p>Guess the word or die!</p>
      )}
    </div>
  );
};

const checkGameOver = (wordToGuess, guessedLetters) => {
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ).length;
  const maxIncorrectGuesses = 11; 

  return (
    isWordGuessed(wordToGuess, guessedLetters) ||
    incorrectGuesses >= maxIncorrectGuesses
  );
};

const isWordGuessed = (wordToGuess, guessedLetters) => {
  return wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
};

export default GameStatus;
