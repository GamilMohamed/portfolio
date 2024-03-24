import React, { createContext, useContext, useEffect, useState } from "react";
// import { User } from "./VarDrawingGame";
// import { connectSocket, socket } from "@/src/socket";
// import { DrawingEvent } from "@/shared/socket.event";
// import toast from "react-hot-toast";

interface DrawingGameContextProps {
  select: number;
  setSelect: (select: number) => void;
  isDrawer: boolean;
  drawing: string;
  listSocketMessage: string[];
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

export const DrawingGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [select, setSelect] = useState(0);
  const [isDrawer, setIsDrawer] = useState(false);
  const [listSocketMessage, setListSocketMessage] = useState<string[]>([]);

  useEffect(() => {
    connectSocket();
    if (socket.readyState === 1) {
      socket.onopen = () => {
        console.log("Connected to socket");
      }
      socket.onclose = () => {
        console.log("Disconnected from server");
      }
      socket.onmessage = (event: any) => {
        const asjson = JSON.parse(event.data);
        if (asjson.route === DrawingEvent.GetState) {
          alert("GetState" + asjson.message);
        }
        setListSocketMessage([...listSocketMessage, event.data]);
    }
  }}, []);
  useEffect(() => {
    connectSocket();
	  socket.onmessage = (event: any) => {
      setListSocketMessage([...listSocketMessage, event.data]);
      const json = JSON.parse(event.data);
      if (json.route === DrawingEvent.Drawing)
      {
        console.log("DRAWING FFFFFFFFOUND");
        setIsDrawer(true);
      }
      if (json.route === DrawingEvent.GetState) {
        // alert("GetState" + json.message);
        const jsmess = JSON.parse(json.message);
        alert("jsmess" + jsmess);
      }
    }}, []);

  
  useEffect(() => {
    connectSocket();
    if (socket.readyState === 1) {
      if (select === 1) {
        const mes = JSON.stringify({ route: DrawingEvent.Drawer, message: "You are the drawer" })
        alert(mes)
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
