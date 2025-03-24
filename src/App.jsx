import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
