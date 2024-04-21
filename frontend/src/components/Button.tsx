export const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    
    return <button onClick={onClick} className=" bg-green-600 hover:bg-green-700  text-white text-3xl font-bold py-4 px-24 rounded-lg ">
        {children}
    </button>
           
}