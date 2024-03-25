import { GameStateType } from "./DrawingGame/DrawingContext";
import React from "react";
import styled from "styled-components";

const GameStateContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function GameState({ state }: { state: GameStateType }) {
	return (
		<>
			<GameStateContainer>
				<div>
					<p>
						{state.drawer ? "There is a drawer" : "There is no drawer"}
					</p>
					<p>
						There is {state.guesser} guesser
					</p>
					<p>
						The word is {state.word}
					</p>
				</div>
			</GameStateContainer>
		</>
		);
}
export default GameState;