import styled from "styled-components";
import { useDrawingGame } from "./DrawingGame/DrawingContext";


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

const Text = styled.div<{  $val:number }>`
  color: white;
  font-size: 20px;
  // margin: 10px;
  // border: 1px solid white;
  background-color: ${(props) => (props.$val % 2 === 0 ? "#222" : "#333")};
  width: 100%;
  text-align: left;
`;

export default function Chat() {
  const { chat } = useDrawingGame();
  return (
    <div>
      <h1>Chat</h1>
      <Bloc>
        {chat.map((message, index) => (
          <Text $val={index}  key={index}>{message}</Text>
        ))}
      </Bloc>
    </div>
  );
}
