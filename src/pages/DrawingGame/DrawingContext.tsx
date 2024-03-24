import React, { createContext, useContext, useEffect, useState } from "react";

interface DrawingGameContextProps {
  select: number;
  setSelect: (select: number) => void;
  isDrawer: boolean;
  drawing: string;
  listSocketMessage: string[];
  gameState: GameState;
  resetGame: () => void;
}

const drawing = "/drawing";
import { connectSocket, socket } from "../../socket";

export const enum DrawingEvent {
  Drawing = '/drawing/drawing',
  Clear = '/drawing/clear',
  Guess = '/drawing/guess',
  Word = '/drawing/word',
  Exception = '/drawing/exception',
  Drawer = '/drawing/drawer',
  Guesser = '/drawing/guesser',
  NextGame = '/drawing/nextGame',
  Status = '/drawing/status',
  Logout = '/drawing/logout',
  Login = '/drawing/login',
  GetState = '/drawing/getState',
}

const DrawingGameContext = createContext<DrawingGameContextProps | undefined>(
  undefined
);

type GameState = {
  drawer: boolean;
  guesser: number;
  word: string;
};

export const DrawingGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [select, setSelect] = useState(0);
  const [isDrawer, setIsDrawer] = useState(false);
  const [listSocketMessage, setListSocketMessage] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>([] as unknown as GameState);

  useEffect(() => {
    connectSocket();
    if (socket.readyState === 1) {
      socket.onopen = () => {
        console.log("Connected to socket");
      }
      socket.onclose = () => {
        console.log("Disconnected from server");
      }
    //   socket.onmessage = (event: any) => {
    //     const asjson = JSON.parse(event.data);
    //     alert("asjson" + asjson.route);
    //     if (asjson.route === DrawingEvent.GetState) {
    //       // alert("GetState" + asjson.message);
    //     }
    //     setListSocketMessage([...listSocketMessage, event.data]);
    // }
  }}, []);
  useEffect(() => {
    connectSocket();
	  socket.onmessage = (event: any) => {
      setListSocketMessage([...listSocketMessage, event.data]);
      console.log("EVENT DATA >>", event.data);
      const json = JSON.parse(event.data);
      console.log("JSON >>", json);
      if (json.route === "/test") {
        alert("test");
      }
      if (json.route === DrawingEvent.Drawing)
      {
        console.log("DRAWING FFFFFFFFOUND");
        setIsDrawer(true);
      }
      if (json.route === DrawingEvent.GetState) {
        console.log("ACTUAL STATE", json);
        // const state = [json["drawer"], json["guesser"], json["word"]];
        setGameState({ drawer: json["drawer"], guesser: json["guesser"], word: json["word"]});
        if (json.drawer == 1)
          setIsDrawer(true);
      }
    }}, []);


    // RESET GAME
    function resetGame() {
      setSelect(0);
      setIsDrawer(false);
      socket.send(JSON.stringify({ route: DrawingEvent.NextGame, message: "Next game" }));
    }
  
  useEffect(() => {
    connectSocket();
    if (socket.readyState === 1) {
      if (select === 1) {
        const mes = JSON.stringify({ route: DrawingEvent.Drawer, message: "You are the drawer" })
        // alert(mes)
        socket.send(mes);
        setIsDrawer(true);
      }
      if (select === 2) {
        const mes = JSON.stringify({ route: DrawingEvent.Guess, message: "Someone is guessing" })
        socket.send(mes);
      }
    }
  }, [select]);

  return (
    <DrawingGameContext.Provider
      value={{
        select,
        setSelect,
        isDrawer,
        drawing,
        listSocketMessage,
        gameState,
        resetGame,
      }}
    >
      {children}
    </DrawingGameContext.Provider>
  );
};

export const useDrawingGame = (): DrawingGameContextProps => {
  const context = useContext(DrawingGameContext);
  if (!context) {
    throw new Error("useDrawingGame must be used within a DrawingGameProvider");
  }
  return context;
};
