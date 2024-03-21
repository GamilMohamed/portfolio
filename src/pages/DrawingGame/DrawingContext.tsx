// import React, { createContext, useContext, useEffect, useState } from "react";
// // import { User } from "./VarDrawingGame";
// // import { connectSocket, socket } from "@/src/socket";
// // import { DrawingEvent } from "@/shared/socket.event";
// // import toast from "react-hot-toast";

// interface DrawingGameContextProps {
//   gameWon: boolean;
//   error: string | null;
//   select: number;
//   setSelect: (select: number) => void;
//   isDrawer: boolean;
//   isGuesser: boolean;
// }
// // import { PSToast } from "../Friends/FriendsContext";

// const DrawingGameContext = createContext<DrawingGameContextProps | undefined>(
//   undefined
// );

// export const DrawingGameProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [gameWon, setGameWon] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [select, setSelect] = useState(0);
//   const [isDrawer, setIsDrawer] = useState(false);
//   const [isGuesser, setIsGuesser] = useState(false);

//   // useEffect(() => {
//   //     connectSocket();

//   //   socket.on(DrawingEvent.DRAWER, (data:string, image:string) => {
//   //     PSToast(image, data + " est en train de dessiner");
//   //     setIsGuesser(true);
//   //     setIsDrawer(true);
//   //   });

//   //   socket.on(DrawingEvent.STATUS, (count: number) => {
//   //     setSelect(count);
//   //   });

//   //   socket.on(DrawingEvent.NEXT_ROUND, (winner: string) => {
//   //   toast.success(winner + " a gagne la manche!!");
//   //   setGameWon(true);
//   //     setTimeout(() => {
//   //       socket.emit(DrawingEvent.NEXT_ROUND, null);
//   //       setGameWon(false);
//   //   }, 1000);
//   //   });

//   //   socket.on(DrawingEvent.EXCEPTION, (error: string) => {
//   //     setError(error);
//   //   });

//   //   return () => {
//   //     socket.off(DrawingEvent.EXCEPTION);
//   //     socket.off(DrawingEvent.NEXT_ROUND);
//   //     socket.off(DrawingEvent.STATUS);
//   //     socket.off(DrawingEvent.DRAWER);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   if (select === 1) {
//   //     socket.emit(DrawingEvent.DRAWER, null);
//   //     setIsDrawer(true);
//   //   }
//   //   if (select === 2) {
//   //     socket.emit(DrawingEvent.GUESSER, null);
//   //   }
//   // }, [select]);

//   return (
//     <DrawingGameContext.Provider value={{ gameWon, error, select, setSelect, isDrawer, isGuesser}}>
//       {children}
//     </DrawingGameContext.Provider>
//   );
// };

// export const useDrawingGame = (): DrawingGameContextProps => {
//   const context = useContext(DrawingGameContext);
//   if (!context) {
//     throw new Error("useDrawingGame must be used within a DrawingGameProvider");
//   }
//   return context;
// };
