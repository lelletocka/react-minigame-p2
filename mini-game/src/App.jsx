import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Game from "./pages/Game.jsx";
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Routes> 
      </BrowserRouter>
    </>  
  )
}

export default App;
