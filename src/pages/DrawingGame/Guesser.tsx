// // import { DrawingEvent } from "@/shared/socket.event";
// // import { socket } from "@/src/socket";
// import { useState, useEffect } from "react";

// const Guesser = () => {
//   const [drawing, setDrawing] = useState("");
//   const [word, setWord] = useState<string | null>(null);
//   // useEffect(() => {
//   //   socket.on(DrawingEvent.DRAWING, (data) => {
//   //     setDrawing(data);
//   //   });
//   // }, []);

//   // useEffect(() => {
//   //   socket.emit(DrawingEvent.GUESS, word);
//   // }, [word]);

//   return (
//     <>
//     <div>
//       <img
//         style={{
//       backgroundColor: "#cdcdcd",
//           width: window.innerWidth / 2,
//           height: window.innerHeight / 2,
//         }}
//         src={`${drawing}`}
//         alt=""
//         />
//     </div>
//     <input type="text" onChange={(e) => setWord(e.target.value)} />
//     </>
//   );
// };
// export default Guesser;
