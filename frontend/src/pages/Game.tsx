import { Button } from "../components/Button"
import { Chessboard } from "../components/Chessboard"
import { useSocket } from "../hooks/useSocket"

export const Game = () => {
    const socket = useSocket();

    if(!socket) return <div>Connecting...</div>
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-xl w-full">
            <div className="grid grid-cols-6 gap-4 ">
                <div className="col-span-4 bg-red-400 ">
                    <Chessboard />
                </div>

                <div className="col-span-2 bg-green-300">
                    

                    </Button>
                </div>
            </div>
        </div>
        
    </div>
}