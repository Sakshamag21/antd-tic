import Game from "../components/Game";
// import "./index.css";
//import "antd/dist/antd.css"
import {RecoilRoot} from "recoil";
export default function Home(){
    return(
        <RecoilRoot>
        <Game></Game></RecoilRoot>

    )
}