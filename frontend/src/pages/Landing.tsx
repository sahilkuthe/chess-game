import { useNavigate } from "react-router-dom"

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
                        <button onClick={() => {
                            navigate("/game")
                        }} className=" bg-green-600 hover:bg-green-700  text-white text-3xl font-bold py-4 px-24 rounded-lg ">Play Online</button>
                    </div>
                </div>
                


            </div>

        </div>
    </div>
}