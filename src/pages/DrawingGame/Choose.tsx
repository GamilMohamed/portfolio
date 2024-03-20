import styled from "styled-components";
import { useDrawingGame } from "./DrawingContext";

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 150px;
  font-size: 1.5rem;
  border-radius: 5px;
`;

const Choose = () => {
	const {select, setSelect, isDrawer} = useDrawingGame();
	return (
		<>
		{
			select === 0 && 
			(
				<>
					{
						!isDrawer &&
						<Buttons
						style={{ backgroundColor: "green" }}
						onClick={() => setSelect(1)}
						>
						DRAWER
						</Buttons>
					}
					<Buttons
					style={{ backgroundColor: "red" }}
					onClick={() => setSelect(2)}
					>
					GUESSER
					</Buttons>
				</>
			)
		}
		</>
	);
}

export default Choose;