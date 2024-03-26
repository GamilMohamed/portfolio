import styled from "styled-components";
import { useDrawingGame } from "./DrawingContext";

const Buttons = styled.button`
  height: 100px;
  width: 300px;
  font-size: 1.5rem;
  border: none;
  border-radius: 10px;
  letter-spacing: 3px;
  font-weight: bold;
  color: #DCDCDC;
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  // background-color: #f5f5f5;
`;


const Choose = () => {
  const { select, setSelect, isDrawer } = useDrawingGame();
  return (
    <>
      <Select>
        {select === 0 && (
          <>
            {!isDrawer && (
              <Buttons
                style={{ backgroundColor: "#d35400" }}
                onClick={() => setSelect(1)}
              >
                DRAWER
              </Buttons>
            )}
            <Buttons
              style={{ backgroundColor: "#1e824c" }}
              onClick={() => setSelect(2)}
            >
              GUESSER
            </Buttons>
          </>
        )}
      </Select>
    </>
  );
};

export default Choose;