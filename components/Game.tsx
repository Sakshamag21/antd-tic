import React from "react";
import { Fragment } from "react";
import { calculateWinner } from "./helper";
import Board from "./Board";
import {atom,useRecoilState} from 'recoil';
import { Button ,Typography} from "antd"; 

import 'antd/dist/antd.css';

const {Text,Title}=Typography;
const Game = () => {
  const crrAtom=atom({
    key:'iiii',
    default:0
  })
  const crrAtom1=atom({
    key:'yes',
    default:true
  })
  const crrAtom2=atom({
    key:'uuuu',
    default:[Array(9).fill(null)]
  })
  const [history, setHistory] = useRecoilState(crrAtom2);
  const [stepNumber, setStepNumber] = useRecoilState(crrAtom);
  const [xIsNext, setXisNext] = useRecoilState(crrAtom1);
  const tr1=history[stepNumber]
  const winner = calculateWinner(tr1);
  const xO = xIsNext ? "X" : "O";
  

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <Button type="primary" onClick={() => jumpTo(move)} style={{marginBottom:"10px",fontSize:"1.2rem",height:"36px"}}>{destination}</Button>
        </li>
      );
    });

  return (
    <>
      
      <Board squares={history[stepNumber]} onClick={handleClick} />
      {console.log(history[stepNumber],history)}
      {/* <Board onClick={handleClick} /> */}
      {/* <div className="info-wrapper"> */}
      <div className="historyDisplay">
        <div>
          <Title level={2}><Text  style={{color:"white"}}>History</Text></Title>
          {renderMoves()}
        </div>
        {/* <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3> */}
        {/* <Title level={2}><Text type="default" style={{color:"white"}}>{winner ? "Winner: " + winner : "Next Player: " + xO}</Text></Title> */}
      </div>
      <Title level={2}><Text  style={{color:"white",position:"absolute",top:"27px",right:"47px"}}>{winner ? "Winner: " + winner : "Next Player: " + xO}</Text></Title>
    </>
  );
};

export default Game;
