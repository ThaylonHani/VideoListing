import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Login/>} />
      <Route path="/home" element={<App/>}></Route>
    </Routes>
  </BrowserRouter>
);
