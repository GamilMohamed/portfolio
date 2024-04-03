import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import { useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";
import { useEffect, useState } from "react";
import axios from "axios";
import GameState from "./GameState";
import Chat from "./Chat";
import styled from "styled-components";
// import { connectSocket, socket } from "../socket";
// import styled from "styled-components";
const Titles = ["Jeu du dessin", "Drawer", "Guesser"];

// const GameButton = styled.button`
//   width: 100px;
//   height: 50px;
//   background-color: #1a1a1a;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-bottom: 10px;
//   transition: background-color 0.25s;
//   &:hover {
//     background-color: #646cff;
//   }
// `;

const ShowComponent = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const InputPlace = styled.input<{ $color: string}>`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  border: 1px solid ${(props) => props.$color};
  margin-bottom: 15px;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const CasinoFile = () => {
  useEffect(() => {
    async function gettest() {
      await axios.get("https://backend.dieriba.com/moha/jm").then((res) => {
        console.log("data from jm", res.data);
      });
    }
    gettest();
  }, []);

  function InputUsername() {
    return (
      <>
      <InputDiv>
      {error && <h1>{error}</h1 > || 
      <h1>Enter your username</h1>}
        <InputPlace
          $color={error ? "red" : "black"}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSetUserName((e.target as HTMLInputElement).value);
            }
          }}
          maxLength={10}
          minLength={3}
          autoFocus
          />
      </InputDiv>
      <GameState />
      </>
    );
  }

  const { select, username, error, handleSetUserName } = useDrawingGame();
  const [show, setShow] = useState<boolean>(false);

  if (!username) {
    return (
      <div>
        <InputUsername />
      </div>
    );
  }

  return (
    <div className="menu-game">
      <p>Your name is {username}</p>
      {<Title>{Titles[0]}</Title>}
      <div></div>
      {/* <GameButton onClick={resetGame}>Reset</GameButton> */}
      {select === 0 && <Choose></Choose>}
      {select === 1 && <Drawing></Drawing>}
      {select === 2 && <Guesser></Guesser>}
      <>
        <ShowComponent onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Status
        </ShowComponent>
        {(show && <GameState />) || (select > 0 && <Chat />)}
      </>
    </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
