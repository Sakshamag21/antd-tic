import React ,{FC} from "react";
import Square from "./Square";
//import {selector,useRecoilValue} from 'recoil'
//import {useRecoilState,atom} from 'recoil';
// const squares=history[stepNumber]
// const crrAtom2=atom({
//   key:'uuuu',
//   default:[Array(9).fill(null)]
// })
// const [history, setHistory] = useRecoilState(crrAtom2);
// const tryw=selector({
//   key:'tryw',
//   get:({get})=>{
//     const text=get(crrAtom2)
//     return text
//   }
// })
// const Board = ({ square,onClick }) => (
interface IProps{
  squares:number[]
  onClick:(i:number)=>any;
 
}
export default function Board({squares,onClick}:IProps){
  return(
  <>
  {/* <script>{console.log(squares,"squares")}</script> */}
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick1={() => onClick(i)} />
    ))}
  </div>
  </>)
};


