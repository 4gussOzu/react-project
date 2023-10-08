import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div> 
      
    </>
  )
}

export default App
