import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
