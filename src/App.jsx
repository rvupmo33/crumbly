import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Note />} />
    </Routes>
  );
};

export default App;
