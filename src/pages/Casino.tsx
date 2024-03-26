import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import {useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect } from "react";
import axios from "axios";
import GameState from "./GameState";
// import { connectSocket, socket } from "../socket";
// import styled from "styled-components";
const Titles = ["Drawing Game", "Drawer", "Guesser"];

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

const CasinoFile = () => {
  useEffect(() => {
    async function gettest()  
    {
      await axios.get("https://backend.dieriba.com/moha/gamil")
    }
    gettest();
  }, []);

  const {select} = useDrawingGame();
  return (
      <div className="menu-game">
        <Title>{Titles[0]}</Title>
        <div>
        </div>
        {/* <GameButton onClick={resetGame}>Reset</GameButton> */}
        {select === 0 && <Choose></Choose>}
        {select === 1 && <Drawing></Drawing>}
        {select === 2 && <Guesser></Guesser>}
        <>
        <GameState/>
        </>
      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
