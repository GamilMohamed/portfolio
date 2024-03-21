// import { io, Socket } from "socket.io-client";
// import { useEffect } from "react";

// let socket: Socket;
let socket: any;

const connectSocket = () => {
  if (!socket) {
    try {
      socket = new WebSocket("wss://portfoliows.dieriba.com");
	  console.log("Connecting to socket", socket.readyState);
	//   socket.onopen = () => {
	// 	console.log("Connected to socket");
	//   };
	//   socket.onmessage = (event: any) => {
	// 	// console.log("Message from server ", event.data);
	//   };
	//   socket.onclose = () => {
	// 	console.log("Disconnected from server");
	//   };
    } catch (err) {
      console.log(err);
    }
  }

  //   if (!socket) {
  //     try {
  // 		console.log("Connecting to socket");
  //       socket = io("ws://localhost:8080");
  //     }
  //     catch (err) {
  // 		console.log(err);
  //     }
  //   }
};

export { socket, connectSocket };
