import { GameStateType, useDrawingGame } from "./DrawingGame/DrawingContext";
// import React from "react";
import styled from "styled-components";
import { Show } from "./Show";

const GameStateContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Line = styled.p<{ $color?: boolean }>`
	font-size: 1.5em;
	font-style: italic;
	padding-top: 0.5em;
	color: ${(props) => (props.$color ? "green" : "red")};
`;

function GameState({ state }: { state: GameStateType }) {
	const { connected } = useDrawingGame();
	return (
		<>
			<GameStateContainer>
				<div>
					<Line $color={connected} >Connection is {connected ? "on" : "off"}</Line>
					<Show>
						<Show.When isTrue={connected && state.drawer}>
							<Line $color={true}>There is a drawer</Line>
						</Show.When>
						<Show.When isTrue={connected && !state.drawer}>
							<Line $color={false}>Missing a drawer</Line>
						</Show.When>
					</Show>
					<Show>
						<Show.When isTrue={connected && state.guesser > 1}>
							<Line $color={true}>There are {state.guesser} guessers</Line>
						</Show.When>
						<Show.When isTrue={connected && state.guesser === 0}>
							<Line $color={false}>There are no guessers</Line>
						</Show.When>
					</Show>
					<Show>
						<Show.When isTrue={connected && state.clients === 1}>
							<Line $color={false}>You are alone !!</Line>
						</Show.When>
						<Show.When isTrue={connected && state.clients > 1}>
							<Line $color={true}>There are {state.clients} users logged in</Line>
						</Show.When>
						<Show.When isTrue={connected && state.clients === 0}>
							<Line $color={false}>There are no users</Line>
						</Show.When>
					</Show>
				</div>
			</GameStateContainer>
		</>
		);
}
export default GameState;