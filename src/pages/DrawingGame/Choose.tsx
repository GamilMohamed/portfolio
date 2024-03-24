import styled from "styled-components";
import { useDrawingGame } from "./DrawingContext";

const Buttons = styled.button`
  align-items: center;
  height: 100px;
  width: 300px;
  font-size: 1.5rem;
  border-radius: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #DCDCDC;
  margin: 10px;
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
  height: 40vh;
//   background-color: #f5f5f5;
`;


const Choose = () => {
  const { select, setSelect, isDrawer } = useDrawingGame();
  return (
    <>
      <Select>is drawer{isDrawer && "true" || "false"}
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