import { Title } from "../assets/data/Variables";
import Drawing from "./DrawingGame/Drawing";
import Guesser from "./DrawingGame/Guesser";
import { useDrawingGame } from "./DrawingGame/DrawingContext";
import Choose from "./DrawingGame/Choose";

const Titles = ["Drawing Game", "Drawer", "Guesser"];

const CasinoFile = () => {
  const {error, select} = useDrawingGame();

  return (
      <div className="menu-game">
        <Title>{Titles[0]}</Title>
        
        { error === null && <>
          <Choose></Choose>
          {select === 1 && <Drawing></Drawing>}
          {select === 2 && <Guesser></Guesser>}
        </> || <div>{error}x</div>
        }

    

      </div>
  );
};
// || <div>Waiting for other players</div>}
export default CasinoFile;
