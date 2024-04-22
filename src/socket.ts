// import { io, Socket } from "socket.io-client";
// import { useEffect } from "react";

// let socket: Socket;
let socket: WebSocket;

const connectSocket = () => {
  if (!socket) {
    try {
      socket = new WebSocket("wss://portfoliows.dieriba.com/drawing");
	    console.log("Connecting to socket >>>>>>", socket.readyState);
    } catch (err) {
      console.log(err);
    }
  }
  return socket?.readyState;
};

// setInterval(refreshWS, 10000);
// setInterval(refreshWS, 120000);


export { socket, connectSocket };
