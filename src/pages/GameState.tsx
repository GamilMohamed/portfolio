import { useDrawingGame } from "./DrawingGame/DrawingContext";
import { GameStateContainer, Line } from "../assets/data/Variables";

function GameState() {
  const { connected, gameState } = useDrawingGame();

  if (gameState === undefined) return null;

  return (
    <>
      <GameStateContainer>
          <Line $color={connected}>
            Connection is {connected ? "on" : "off"}
          </Line>
          <Line $color={gameState.drawer}>
            {gameState.drawer ? "There is a drawer" : "Missing a drawer"}
          </Line>
          <Line $color={gameState.guesser as unknown as boolean}>
           {gameState.guesser ? `There is ${gameState.guesser} guesser` : "There are no guesser"}{gameState.guesser > 1 ? "s" : ""} 
          </Line> 
          <Line $color={gameState.clients as unknown as boolean}>
            {gameState.clients != 0 ? `There are ${gameState.clients} users logged in` : "You are alone !!"}
          </Line>
      </GameStateContainer>
    </>
  );
}
export default GameState;
