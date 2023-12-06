import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Minh from "../src/Pages/Minh/Minh";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exac path="/" element={<MainPage />} />
        <Route exac path="/Minh" element={<Minh />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
