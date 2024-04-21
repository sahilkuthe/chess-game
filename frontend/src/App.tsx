import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './pages/Landing';
import { Game } from './pages/Game';

function App() {
  

  return (
    <>
      <div className='h-screen max-w-full bg-gray-800'>

      
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/game" element={<Game/>} /> 
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
