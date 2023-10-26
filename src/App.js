import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import WordToGuess from './components/WordToGuess';
import GameStatus from './components/GameStatus';
import HangmanDrawing from './components/HangmanDrawing';
import Help from './components/Help';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsToGuess: ["apple", "banana", "cherry", "date", "elephant", "fox", "grape", "horse", "igloo", "jungle", "koala", "lemon", "mango", "nutmeg", "orange", "penguin", "quilt", "rabbit", "strawberry", "tiger", "umbrella", "violet", "watermelon", "xylophone", "yak", "zebra"],
      wordToGuess: '',
      guessedLetters: [],
      incorrectGuesses: 0,
      gameOver: false,
    };
  }

  maxIncorrectGuesses = 11; // Define the maximum number of incorrect guesses

  componentDidMount() {
    // Select a random word from the list
    this.selectRandomWord();
  }

  selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * this.state.wordsToGuess.length);
    const randomWord = this.state.wordsToGuess[randomIndex];
    this.setState({
      wordToGuess: randomWord,
      guessedLetters: [],
      incorrectGuesses: 0,
      gameOver: false,
    });
  }

  handleLetterClick = (letter) => {
    if (!this.state.guessedLetters.includes(letter) && !this.state.gameOver) {
      this.setState((prevState) => {
        const isIncorrect = this.isIncorrectGuess(letter);
        const incorrectGuesses = isIncorrect ? prevState.incorrectGuesses + 1 : prevState.incorrectGuesses;
        if (incorrectGuesses >= this.maxIncorrectGuesses) {
          // Game over logic
          // Disable further clicks
          // Display a game over message
          return {
            guessedLetters: [...prevState.guessedLetters, letter],
            incorrectGuesses: incorrectGuesses,
            gameOver: true, // Set the gameOver flag
          };
        }
        return {
          guessedLetters: [...prevState.guessedLetters, letter],
          incorrectGuesses: incorrectGuesses,
        };
      });
    }
  };

  isIncorrectGuess(letter) {
    // Implement logic to check if the letter is an incorrect guess
    return !this.state.wordToGuess.includes(letter);
  }

  handleRestart = () => {
    // Implement logic to restart the game
    this.selectRandomWord();
  };

  toggleHelp = () => {
    this.setState((prevState) => ({
      showHelp: !prevState.showHelp,
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>To the gallows</h1>
        <button onClick={this.toggleHelp}>Help</button>
        {this.state.showHelp && <Help />} 
        <HangmanDrawing incorrectGuesses={this.state.incorrectGuesses} maxIncorrectGuesses={this.maxIncorrectGuesses} />
        <WordToGuess wordToGuess={this.state.wordToGuess} guessedLetters={this.state.guessedLetters} />
        <GameBoard
          guessedLetters={this.state.guessedLetters}
          onLetterClick={this.handleLetterClick}
        />
        <GameStatus
          wordToGuess={this.state.wordToGuess}
          guessedLetters={this.state.guessedLetters}
          onRestart={this.handleRestart}
          gameOver={this.state.gameOver}
        />
      </div>
    );
  }
}


export default App;
