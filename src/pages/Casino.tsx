import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import {useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect, useState } from "react";
import axios from "axios";
import GameState from "./GameState";
import Chat from "./Chat";
import styled from "styled-components";
// import { connectSocket, socket } from "../socket";
// import styled from "styled-components";
const Titles = ["Jeu du dessin", "Drawer", "Guesser"];

// const GameButton = styled.button`
//   width: 100px;
//   height: 50px;
//   background-color: #1a1a1a;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-bottom: 10px;
//   transition: background-color 0.25s;
//   &:hover {
//     background-color: #646cff;
//   }
// `;


const ShowComponent = styled.button`
position: absolute;
top: 15px;
right: 15px;
`;
const CasinoFile = () => {
  useEffect(() => {
    async function gettest()  
    {
      await axios.get("https://backend.dieriba.com/moha/jm").then((res) => { 
      console.log("data from jm",res.data);
    });
    }
    gettest();
  }, []);

  const {select} = useDrawingGame();
  const [show, setShow] = useState<boolean>(true);
  return (
      <div className="menu-game">
        {<Title>{Titles[0]}</Title>}
        <div>
        </div>
        {/* <GameButton onClick={resetGame}>Reset</GameButton> */}
        {select === 0 && <Choose></Choose>}
        {select === 1 && <Drawing></Drawing>}
        {select === 2 && <Guesser></Guesser>}
        <>
        <ShowComponent onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Status</ShowComponent>
        {show && <GameState/> || select > 0 && <Chat/>}
        </>
      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
