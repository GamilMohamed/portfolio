import Time from "./Time";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connectSocket, socket } from "../../socket";
import { io } from "socket.io-client";

const Bloc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Menu = styled(Link)`
  margin-top: 15px;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "PS Old", sans-serif;
  font-size: 70px;
  &:hover {
    color: grey;
  }
`;

interface Props {
  lang: string;
}

const Header = ({ lang }: Props) => {
  const [press, setPress] = useState(0);

  const [message, setMessage] = useState("");
  useEffect(() => {
    connectSocket();
    console.log("Connecting to socket");
    console.log(socket);
    socket.onopen = () => {
      console.log("Connected to socket");
    };
    socket.onmessage = (event) => {
      setMessage(event.data);
      console.log("Message fr om server ", event);
    };
  }, []);

  useEffect(() => {
    if (socket.readyState === 1) {
      // <-- This is important
      socket.send("avion from the react");
      // socket.send('Hello from the client!');
    }
    // socket.send('Hello from the client!');
  }, [press]);

  return (
    <>
      <Bloc>
        <Time lang={lang} />
        <Menu to="/">PS42</Menu>
        <p>
          message is [{message}] [{press}] !!
        </p>
        <button onClick={() => setPress(press + 1)}>Press me</button>
      </Bloc>
    </>
  );
};

export default Header;
function waitForOpenSocket(socket: any) {
  throw new Error("Function not implemented.");
}
