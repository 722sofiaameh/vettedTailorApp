// import { useState } from "react";
// import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./home";
import Profile from "./profile";
import Success from "./success";
import TransactionHistory from "./transactionHistory";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
            <Route path="/transaction_History" element={<TransactionHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
