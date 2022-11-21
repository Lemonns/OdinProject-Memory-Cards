import './App.css';
import React, { useState } from 'react';
import GameBoard from './components/board';
import ScoreBoard from './components/scoreboard';
import './styles/style.css'

const App = () => {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App" key={55}>
      <ScoreBoard
        currentScore={score}
        currentHighScore={highScore}
      />
      <GameBoard
        updateScore={setScore}
        currentScore={score}
        updateHighScore={setHighScore}
        currentHighScore={highScore}
      />
    </div>
  );
}

export default App;