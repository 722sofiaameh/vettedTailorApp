// import { useState } from "react";
// import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Profile from "./components/profile"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="/profile" element={<Profile/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
