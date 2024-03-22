import React, { createContext, useContext, useEffect, useState } from "react";
// import { User } from "./VarDrawingGame";
// import { connectSocket, socket } from "@/src/socket";
// import { DrawingEvent } from "@/shared/socket.event";
// import toast from "react-hot-toast";

interface DrawingGameContextProps {
  error: string | null;
  select: number;
  setSelect: (select: number) => void;
  isDrawer: boolean;
  isGuesser: boolean;
  theDrawer: string | null;
  drawing: string;
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
}


// import { PSToast } from "../Friends/FriendsContext";

const DrawingGameContext = createContext<DrawingGameContextProps | undefined>(
  undefined
);

export const DrawingGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [select, setSelect] = useState(0);
  const [isDrawer, setIsDrawer] = useState(false);
  const [isGuesser, setIsGuesser] = useState(false);
  const [theDrawer, setTheDrawer] = useState<string | null>(null);
  const [drawing, setDrawing] = useState<string>("");

  useEffect(() => {
    connectSocket();
	  socket.onmessage = (event: any) => {
      const json = JSON.parse(event.data);
      console.log("JSON: ", json);
      if (json.route === DrawingEvent.Drawing)
      {
        console.log("DRAWING FFFFFFFFOUND");
        setIsDrawer(true);
      }
    }}, []);
  useEffect(() => {
    // socket.on(DrawingEvent.DRAWING, (data) => {
      // setDrawing(data);
    // });

    // return () => {
      // socket.off(DrawingEvent.DRAWING);
    // };
  }, []);

  useEffect(() => {
    // connectSocket();
    // socket.send(JSON.stringify({ route: DrawingEvent.Login, message: "Someone is the drawer" }));
    // socket.on(DrawingEvent.DRAWER, (data: string, image: string) => {
      // console.log(image + " is drawing");
      // PSToast(image, data + " is drawing");
      // setTheDrawer(data);
      // setIsGuesser(true);
      // setIsDrawer(true);
    // });

    // socket.on(DrawingEvent.STATUS, (count: number) => {
    //   setSelect(count);
    // });

    // socket.on(
    //   DrawingEvent.LOGOUT,
    //   (image: string, message: string, user: boolean) => {
    //     if (user) {
    //       // PSToast(image, message);
    //       setIsDrawer(false);
    //       setTheDrawer(null);
    //     }
    //   }
    // );
    // socket.on(DrawingEvent.EXCEPTION, (error: string) => {
    //   setError(error);
    // });

    // return () => {
    //   socket.emit(DrawingEvent.LOGOUT, null);
    //   socket.off(DrawingEvent.LOGOUT);
    //   socket.off(DrawingEvent.EXCEPTION);
    //   socket.off(DrawingEvent.STATUS);
    //   socket.off(DrawingEvent.DRAWER);
    // };
  }, []);

  useEffect(() => {
    connectSocket();

    if (select === 1) {
      const mes = JSON.stringify({ route: DrawingEvent.Drawer, message: "You are the drawer" })
      socket.send(mes);
      setIsDrawer(true);
    }
    if (select === 2) {
      const mes = JSON.stringify({ route: DrawingEvent.Guess, message: "Someone is guessing" })
      socket.send(mes);
    }
  }, [select]);

  return (
    <DrawingGameContext.Provider
      value={{
        error,
        select,
        setSelect,
        isDrawer,
        isGuesser,
        theDrawer,
        drawing,
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
