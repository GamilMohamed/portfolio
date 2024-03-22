import { useState, useEffect } from "react";
import Canvas from "./Canvas";
// import { DrawingEvent } from "@/shared/socket.event";
// import { socket } from "@/src/socket";
import styled from "styled-components";
import { Word } from "./VarGame";
import { connectSocket, socket } from "../../socket";
import { DrawingEvent } from "./DrawingContext";

export const CenterEverything = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "hotpink",
  "skyblue",
  "white",
  "gray",
  "black",
];

const ListDrawingWords = [
  ["chaise", "une chaise"],
  ["chien", "un chien"],
  ["chat", "un chat"],
  ["voiture", "une voiture"],
  ["maison", "une maison"],
  ["table", "une table"],
  ["ordinateur", "un ordinateur"],
  ["pomme", "une pomme"],
  ["banane", "une banane"],
  ["kiwi", "un kiwi"],
  ["stylo", "un stylo"],
  ["fraise", "une fraise"],
];

const Color = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  button {
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    margin: 0px 0px 0px 10px;
  }
`;

const ColorButton = styled.button<{ $color: string }>`
  background-color: ${(props) => props.$color};
  box-shadow: 0px 0px 2px 0px ${(props) => props.$color};
`;

const Inputs = styled.div`
  background-color: #cdcdcd;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

const Size = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    align-items: center;
    font-size: 1rem;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    margin: 0px 0px 0px 10px;
    background-color: #dcdcdc;
    font-weight: bold;
    color: black;
    box-shadow: 0px 0px 2px 0px black;
  }
`;

const Circle = styled.div<{ $color: string; $size: number }>`
  background-color: ${(props) => props.$color};
  height: ${(props) => props.$size}px;
  width: ${(props) => props.$size}px;
  border-radius: 50%;
  max-height: 50px;
  max-width: 50px;
`;

const Drawing = () => {
  const [word, setWord] = useState<string | null>("tmr");
  const [color, setColor] = useState<string>("black");
  const [size, setSize] = useState<number>(5);
  const [clear, setClear] = useState<boolean>(false);

  useEffect(() => {
    // connectSocket();
    // socket.send(JSON.stringify({ route: DrawingEvent.Login, message: "Someone joined the Drawing" }));
  }
  , []);

  const handleSize = (size: number) => {
    if (size > 51) {
      setSize(51);
      return;
    }
    if (size < 1) {
      setSize(1);
      return;
    }
    setSize(size);
  };
  useEffect(() => {
    const random = Math.floor(Math.random() * ListDrawingWords.length);
    setWord(ListDrawingWords[random][1]);
    // socket.emit(DrawingEvent.WORD, ListDrawingWords[random][0]);
    // const random = Math.floor(Math.random() * ListDrawingWords.length);
    // setWord(ListDrawingWords[fr]);
    // socket.emit(DrawingEvent.WORD, ListDrawingWords[random]);
  }, []);

  return (
    <>
      {/* <CenterEverything> */}
        <Word>
          Tu dois dessiner <b>{word}</b>
        </Word>
        <Canvas clear={clear} color={color} size={size} />
        <Inputs>
          <Color>
            {colors.map((color) => (
              <ColorButton
                key={color}
                $color={color}
                onClick={() => setColor(color)}
              ></ColorButton>
            ))}
          </Color>
          <Size>
            <div
              style={{
                display: "flex",
                maxWidth: "50px",
                maxHeight: "50px",
                width: "50px",
                height: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle $color={color} $size={size + 5}></Circle>
            </div>
            <button onClick={() => handleSize(0)}>Reset</button>
            <br />
            <button onClick={() => handleSize(size + 1)}>+1</button>
            <br />
            <button onClick={() => handleSize(size - 1)}>-1</button>
            <br />
            <button onClick={() => handleSize(size + 5)}>+5</button>
            <br />
            <button onClick={() => handleSize(size - 5)}>-5</button>
            <br />
            <button onClick={() => setClear(!clear)}>Clear</button>
          </Size>
        </Inputs>
      {/* </CenterEverything> */}
    </>
  );
};

export default Drawing;
