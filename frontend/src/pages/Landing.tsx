import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"/chess-board.png"} className="max-w-lg rounded-md"/>
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">
                        <div className="text-white text-5xl font-bold font-sans">
                            Play Chess online and be a champion!
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center">
                        <Button onClick={()=>{
                            navigate("/game")
                        }}>
                            Play Online
                        </Button>
                    </div>
                </div>
                


            </div>

        </div>
    </div>
}