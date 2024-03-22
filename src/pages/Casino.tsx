import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import { DrawingEvent, useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect, useState } from "react";
import { connectSocket, socket } from "../socket";

const Titles = ["Drawing Game", "Drawer", "Guesser"];

const CasinoFile = () => {
  const {error, select} = useDrawingGame();
  const [loadGame, setLoadGame] = useState(false);
  useEffect(() => {
    // console.log("new client in game");
    // socket.send(JSON.stringify({ route: DrawingEvent.Login, message: "GAME JOINED" }));
  }, []);

  useEffect(() => {
    connectSocket();

    if (select === 0) {
      socket.send(JSON.stringify({ route: DrawingEvent.Login, message: "GAME JOINED" }));
    }
    if (select === 1) { 
      socket.send(JSON.stringify({ route: DrawingEvent.Drawer, message: "DRAWER JOINED" }));
    }
    if (select === 2) {
      socket.send(JSON.stringify({ route: DrawingEvent.Guesser, message: "GUESSER JOINED" }));
    }
  }, [select]);

  useEffect(() => {
	  socket.onmessage = (event: any) => {
      const json = JSON.parse(event.data);
      if (json.route === DrawingEvent.Exception) {
        console.log("Error: ", json.message);
      }
    }
  }, []);
  return (
      <div className="menu-game">
        <Title>{Titles[0]}</Title>
        <button onClick={() =>setLoadGame(true)} > LOAD GAME </button>
        { error === null && <>
          {select === 0 && <Choose></Choose>}
          {select === 1 && <Drawing></Drawing>}
          {select === 2 && <Guesser></Guesser>}
        </> || <div>{error}x</div>
        }

    

      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
