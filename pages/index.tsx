import Game from "../components/Game";
// import "./index.css";
//import "antd/dist/antd.css"
import { Layout } from "antd";
import {RecoilRoot} from "recoil";
const {Content}=Layout;
export default function Home(){
    return(
        <RecoilRoot>
       <Content style={{backgroundColor:"crimson",width:"100vw",height:"100vh",zIndex:"1000",position:"absolute",top:"0px",left:"0px"}}> <Game></Game></Content>
       </RecoilRoot>

    )
}