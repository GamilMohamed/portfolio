// import { socket } from "../../socket";
// import { DrawingEvent } from "@/shared/socket.event";
import { useCallback, useEffect, useRef, useState } from 'react';
import { socket } from '../../socket';
// import toast from "react-hot-toast";

interface CanvasProps {
    width: number;
    height: number;
	color: string;
	size: number;
    clear: boolean;
}

type Coordinate = {
    x: number;
    y: number;
};

const Canvas = ({ width, height, color, size, clear }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            const mes = JSON.stringify({ route: "/drawing/drawing", message: canvas.toDataURL() });
            socket.send(mes)
            // socket.emit(DrawingEvent.DRAWING, canvasRef.current?.toDataURL());
        }
    }, [clear]);

    const startPaint = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);

    useEffect(() => {
      if (!canvasRef.current) {
        return;
      }
      const canvas: HTMLCanvasElement = canvasRef.current;
      canvas.addEventListener('mousedown', startPaint);
      return () => {
        canvas.removeEventListener('mousedown', startPaint);
      };
    }, [startPaint]);
    
    const paint = useCallback(
        (event: MouseEvent) => {
            if (isPainting) {
          const newMousePosition = getCoordinates(event);
          if (mousePosition && newMousePosition) {
            drawLine(mousePosition, newMousePosition);
            setMousePosition(newMousePosition);
          }
        }
      },[isPainting, mousePosition]);
      
      useEffect(() => {
        const mes = JSON.stringify({ route: "/drawing/drawing", message: canvasRef.current?.toDataURL() });
        socket.send(mes)
        // socket.emit(DrawingEvent.DRAWING, canvasRef.current?.toDataURL());
        if (!canvasRef.current) {
          return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    const exitPaint = useCallback(() => {
        setIsPainting(false);
        setMousePosition(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
    };

    const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.strokeStyle = color;
            context.lineJoin = 'round';
            context.lineWidth = size;

            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.fill();
            context.closePath();
            context.stroke();

        }
    };

    return (
    <>
    <canvas style={{backgroundColor:"#cdcdcd", borderRadius:"5px", border:"1px solid black"}}  ref={canvasRef} height={height} width={width} />
    </>
    );
};

Canvas.defaultProps = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
	color: "black",
	size: 0,
};

export default Canvas;