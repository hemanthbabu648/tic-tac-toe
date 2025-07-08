import React, {useState} from "react";
import GameBoard from "./components/GameBoard";
import { calculateWinner } from "./helpers";

import "./styles/root.scss";

const App = () =>{
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(false);
  };

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position =>{
    if(board[position] || winner){
      return;
    }

    setBoard(prev =>{
      return prev.map((square, pos) =>{
        if(pos === position){
          return isXNext ? "X" : 'O';
        }
        
        return square;
      });
    });
    setIsXNext(prev => !prev);

  };

  return(
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <GameBoard board={board} handleSquareClick={handleSquareClick} />
      {winner && (
        <button className="reset-btn" onClick={handleReset} style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', cursor: 'pointer'}}>
          Reset
        </button>
      )}
    </div>
  );
};

export default App;
