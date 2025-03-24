import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

export const App = () =>{
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
    </>
    
  );
}
