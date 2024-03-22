// import { DrawingEvent } from "@/shared/socket.event";
// import { socket } from "@/src/socket";
import { useState, useEffect } from "react";
import styled from "styled-components";

// import Loading from "/src/assets/images/loading.svg"
import { useDrawingGame } from "./DrawingContext";
import { CenterEverything } from "./Drawing";
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
  const { isDrawer, drawing } = useDrawingGame();
  // const { t } = Language();
  useEffect(() => {
    // socket.emit(DrawingEvent.GUESS, word);
  }, [word]);

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
        onChange={(e) => setWord(e.target.value)}
      />
      </CenterEverything>

    </>
  );
};
export default Guesser;
