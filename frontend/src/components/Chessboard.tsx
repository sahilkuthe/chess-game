import { Color, PieceSymbol, Square } from "chess.js";

export const Chessboard = ({board}: {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
}) => {
    
    return <div>
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j)=> {
                    return <div key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-green-500' : 'bg-white'}`}>
                        <div className="w-full flex justify-center h-full">
                            <div className="h-full flex justify-center flex-col">
                                {square ? square.type: ""}
                            </div>
                        </div>
                    </div>
                })}

            </div>
        })}
    </div>
}