// import { useState } from "react";
// import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./home";
import Profile from "./profile";
import Success from "./success";
import TransactionHistory from "./transactionHistory";
import Measurements from "./measurements";
import LogOut from "./logOut";
import Customers from "./customers";
import Products from "./products";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
            <Route path="/transaction_History" element={<TransactionHistory />} />
            <Route path="/measurements" element={<Measurements />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
