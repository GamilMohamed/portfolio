import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import { DrawingEvent, useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect, useState } from "react";
import { connectSocket, socket } from "../socket";

const Titles = ["Drawing Game", "Drawer", "Guesser"];

const CasinoFile = () => {
  const {select, listSocketMessage} = useDrawingGame();

  useEffect(() => {
    function getStateOfGame() {
      connectSocket();
      if (socket.readyState === 1) {
        socket.send(JSON.stringify({ route: DrawingEvent.GetState, message: "Get state of game" }));
      }
    }
    getStateOfGame();
  }, []);

  return (
      <div className="menu-game">
        <Title>{Titles[0]}</Title>
        {select === 0 && <Choose></Choose>}
        {select === 1 && <Drawing></Drawing>}
        {select === 2 && <Guesser></Guesser>}
        <>
        {listSocketMessage.map((message, index) => {
          return <div key={index}> message[{index}]{message}</div>
        }
        )}
        </>
      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
