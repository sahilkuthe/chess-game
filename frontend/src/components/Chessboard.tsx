import { Chess, Color, PieceSymbol, Square } from "chess.js";
import React, { useState } from "react";
import { MOVE } from "../pages/Game";

export const Chessboard = ({chess, board, socket, setBoard}: {
    chess: Chess;
    setBoard: React.Dispatch<React.SetStateAction<({            //
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]>>;                                            //
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);
    
    return <div>
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j)=> {
                    const squareRep = String.fromCharCode(97 + (j % 8)) + "" + (8-i) as Square;

                    return <div onClick={() => {
                        if(!from){
                            setFrom(squareRep)          //
                        }else{                // 
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    move: {
                                        from,
                                        to: squareRep
                                    }
                                   
                                }

                            }))
                            setFrom(null)
                            chess.move({
                                from,
                                to: squareRep
                            });
                            setBoard(chess.board())
                            console.log({
                                from,
                                to: squareRep
                            })
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-green-500' : 'bg-white'}`}>
                        <div className="w-full flex justify-center h-full">
                            <div className="h-full flex justify-center flex-col">
                                {square ? <img className="w-4" src={`/${square?.color === "b" ? square?.type: `${square?.type?.toUpperCase()}`}.png`} />: null}
                               
                            </div>
                        </div>
                    </div>
                })}

            </div>
        })}
    </div>
}