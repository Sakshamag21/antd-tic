import React from "react";
import { Button } from "antd";
//import 'antd/dist/antd.css';
interface SquareProps{
  value: number,
  onClick1:()=>any;
}
const Square = ({ value, onClick1 }:SquareProps) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    // <Button type="text" className={style} onClick={onClick}>
    //   {value}
    // </Button>
    <Button  type="primary"  onClick={onClick1}  style={{fontSize:"6rem",width:"160px",height:"160px",visibility:"visible"}}>
      {value}
    </Button>
  );
};

export default Square;
