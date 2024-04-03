// import { DrawingEvent } from "@/shared/socket.event";
// import { socket } from "@/src/socket";
import { useState, useEffect, SetStateAction } from "react";
import styled from "styled-components";

// import Loading from "/src/assets/images/loading.svg"
import { useDrawingGame } from "./DrawingContext";
import { CenterEverything } from "./Drawing";
import { socket } from "../../socket";
// import Language from "@/src/Language";


// const CenterEverything = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Input = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
`;

const Guesser = () => {
  const [word, setWord] = useState<string | null>(null);
  const { isDrawer, drawing, username } = useDrawingGame();
  useEffect(() => {
    socket.send(JSON.stringify({ route: "/drawing/guessedword", message: word }))
  }, [word]);

  const handleKeyDown = (e: { key: string; currentTarget: { value: SetStateAction<string | null>; }; }) => {
    if (e.key === "Enter") {
      setWord("[" + username + "] " + e.currentTarget.value);
      e.currentTarget.value = ""; // This line will not work
    }
  };

  return (
    <>
      <CenterEverything>
        <img
          style={{
            backgroundColor: "#cdcdcd",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
          src={`${drawing}`}
          alt=""
        />
      <Input
        maxLength={15}
        disabled={!isDrawer}
        placeholder={!isDrawer ? "No drawer yet" : "Guess the word"}
        type="text"
        onKeyDown={handleKeyDown}
      />
      <p>Press enter</p>
      </CenterEverything>

    </>
  );
};
export default Guesser;
