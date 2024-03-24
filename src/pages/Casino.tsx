import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import {useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect, useState } from "react";
import axios from "axios";
// import { connectSocket, socket } from "../socket";

const Titles = ["Drawing Game", "Drawer", "Guesser"];

const CasinoFile = () => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    async function gettest()  
    {
      await axios.get("https://backend.dieriba.com/moha/gamil").
      then(response => {
        console.log(response.data);
        setValue(response.data);
      });
    }
    gettest();
    console.log(">",gameState);
  }, []);

  const {select, listSocketMessage, gameState, resetGame} = useDrawingGame();
  const [name, setName] = useState<string | null>(null);
  return (
      <div className="menu-game">
        <Title>{Titles[0]}</Title>
        <div>
        </div>
        <button onClick={resetGame}>Reset</button>
        {select === 0 && <Choose></Choose>}
        {select === 1 && <Drawing></Drawing>}
        {select === 2 && <Guesser></Guesser>}
        <>
        State of Game:D:{gameState.drawer}G:{gameState.guesser}W:{gameState.word}
        </>
      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
