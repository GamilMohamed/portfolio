import { useState, useEffect } from "react";
import Canvas from "./Canvas";
// import { DrawingEvent } from "@/shared/socket.event";
// import { socket } from "@/src/socket";

const ListDrawingWords = [
	"chaise",
	"table",
	"ordinateur",
	"lampe",
	"maison",
	"voiture",
];

const Drawing = () => {
	const [word, setWord] = useState<string | null>("tmr");
	const [color, setColor] = useState<string>("black");
	const [size, setSize] = useState<number>(0);

	useEffect(() => {
		const random = Math.floor(Math.random() * ListDrawingWords.length);
		setWord(ListDrawingWords[random]);
		socket.emit(DrawingEvent.WORD, ListDrawingWords[random]);
	}, []);
	
	return (
		<>
		<div>Tu dois dessiner: {word}</div>
		<Canvas color={color} size={size} />
		<input type="color" onChange={(e) => setColor(e.target.value)} />
		<input
			type="number"
			onChange={(e) => setSize(parseInt(e.target.value))}
			min={0}
			max={10}
		/>
		</>
	);
}

export default Drawing;