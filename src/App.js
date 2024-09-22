import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "../src/components/Navbar/navbar";
import { FooterBar } from "./components/Footer/footerBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes></AppRoutes>
        <FooterBar />
      </BrowserRouter>
    </>
  );
}
export default App;
