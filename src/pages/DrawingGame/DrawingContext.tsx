import React, { createContext, useContext, useEffect, useState } from "react";

interface DrawingGameContextProps {
  // option selected
  select: number;
  // set option selected
  setSelect: (select: number) => void;
  // is there a drawer ?
  isDrawer: boolean;
  // drawing image
  drawing: string;
  // game state
  gameState: GameStateType;
  // reset game
  resetGame: () => void;
  // is server connected
  connected: boolean; 
}

// const drawing = "/drawing";
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
  Reset = '/drawing/reset',
}

const DrawingGameContext = createContext<DrawingGameContextProps | undefined>(
  undefined
);

export type GameStateType = {
  // is there a drawer ?
  drawer: boolean;
  // how many guesser ?
  guesser: number;
  // drawing image
  drawing: string;
  // number of users
  clients: number;
};

export const DrawingGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drawing, setDrawing] = useState<string>("");
  const [select, setSelect] = useState(0);
  const [isDrawer, setIsDrawer] = useState(false);
  const [gameState, setGameState] = useState<GameStateType>([] as unknown as GameStateType);
  const [connected, setConnected] = useState(true);
  // socket connexion
  // parse socket message
  function amIConnected() {
    console.log("socket.readyState", socket.readyState);
    if (socket.readyState === 1) {
      return true;
    }
    if (socket.readyState === 3) {
      window.location.reload();
    }
    return false;
  }

  
  useEffect(() => {
    connectSocket();
    
    socket.onclose = () => {
      setInterval(() => {setConnected(amIConnected());}, 5000);
      setConnected(false);
    };
    }, [socket]);

  useEffect(() => {
    // setConnected(connectSocket() === 1 ? true : false);
	  socket.onmessage = (event: any) => {
      if (!event.data) {
        return;
      }

      const json = JSON.parse(event.data);
      if (!json.route) {
        return;
      }
      console.log("JSON >>", json);
      if (json.route === "/test") {
        alert("test");
      }
      if (json.route === DrawingEvent.GetState) {
        console.log("NB USERS", json["clients"]);
        setGameState({ drawer: json["drawer"], guesser: json["guesser"], drawing: json["drawing"], clients: json["clients"]});
        setDrawing(json["drawing"]);
        setIsDrawer(json.drawer ? true : false);
      }
      if (json.route === DrawingEvent.Drawing) {
        setDrawing(json.message);
      }
      if (json.route === DrawingEvent.Reset) {
        setSelect(0);
        setIsDrawer(false);
        setGameState({ drawer: false, guesser: 0, drawing: "", clients: gameState.clients});
      }
    }}, []);

    // RESET GAME
    function resetGame() {
      setSelect(0);
      setIsDrawer(false);
      socket.send(JSON.stringify({ route: DrawingEvent.NextGame, message: "Next game" }));
    }
  
  useEffect(() => {
    if (socket.readyState === 1) {
      if (select === 1) {
        const mes = JSON.stringify({ route: DrawingEvent.Drawer, message: "You are the drawer" })
        socket.send(mes);
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
        gameState,
        resetGame,
        connected,
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
