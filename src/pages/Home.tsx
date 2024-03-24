import React, { useEffect, useRef, useState } from "react";
import { connectSocket, socket } from "../socket";
// import Time from "./Header/Time";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Bloc = styled.div`
  // display: flex;
  // justify-content: space-around;
  // align-items: center;e
  z-index: 2;
  background-color: #333;
  width: 50rem;
  max-height: 30rem;
  overflow: auto;
  overflow-x: auto;
  margin: 10px;

`;


const Title = styled.h1`
  color: white;
  text-align: center;
  font-family: "PS Old", sans-serif;
  font-size: 100px;
`;



const Input = styled.input`
  width: 20%;
  height: 50px;
  font-size: 20px;
  margin: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-bottom: 1px solid white;
`;

const Text = styled.div<{  $joined:boolean, $global: boolean, $val:number }>`
  color: white;
  font-size: 20px;
  // margin: 10px;
  // border: 1px solid white;
  background-color: ${(props) => (props.$global && props.$joined ? "green" :  props.$global && !props.$joined ? "red" : props.$val % 2 === 0 ? "#222" : "#333")};
  width: 100%;
  text-align: left;
`;

type Message = {
  route?: string;
  message: string;
  global: boolean;
  joined?: boolean;
};

const Home: React.FC = () => {
	// const [message, setMessage] = useState("");
	// const [messageList, setMessageList] = useState<Message[]>([]);
  // const [nbUsers, setNbUsers] = useState(0);

	// useEffect(() => {
	//   connectSocket();
	//   socket.onopen = () => {
  //     console.log("new user !! connected");
  //     const mes = JSON.stringify({route: "/login", message: "Someone joined the chat"});
  // 	  socket.send(mes);
	//   };
	//   socket.onmessage = (event: any) => {
  //     const json = JSON.parse(event.data);
  //     setNbUsers(json.nbUsers);
  //     if (event.data === "" || event.data === undefined ) return ;
  //     const mess: Message = {
  //       message: json.message,
  //       global: json.global,
  //       joined: json.joined
  //     }
	//   	appendMessage(mess);

	//   };

	// }, []);
  
  
  
	// useEffect(() => {
  //   console.log("nouveaux messages <<");
  //   if (socket.readyState === 1) {
  //     socket.send(message);
  //   }
	// },[message]);
  
  // const appendMessage = (newMessage: Message) => {
  //   if (newMessage.message === "" || newMessage.message === undefined) return ;
  //   setMessageList(prevMessageList => [...prevMessageList, newMessage]);
  // };
  
  // const blocRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (blocRef.current) {
  //     blocRef.current.scrollTop = blocRef.current.scrollHeight;
  //   }
  // }, [messageList]);

  
  return (
    <div>
      <Title>42Chat</Title>
      {/* <Link to="/portfolio/casino"><button>Casino</button></Link>
      <Text  $joined={false} $global={false} $val={0} >Nombre de users connectés: {nbUsers}</Text>
      <Bloc  ref={blocRef}>
        <div>
          {messageList.map((message, index) => (
            <Text  $joined={message.joined || false}  $global={message.global || false} $val={index} key={index}>
              {message.global ? "" : "[" + index + "]"} 
              {message.message}
            </Text>
          ))}
        </div>
      </Bloc>
        <Input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const mes = JSON.stringify({route: "/message", message: (e.target as HTMLInputElement).value});
              setMessage(mes);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        /> */}
    </div>
  );
};

export default Home;
