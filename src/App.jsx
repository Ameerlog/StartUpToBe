import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import Mainlayout from "./layouts/Mainlayout";
import ShowCase from "./pages/Showcase";

import Navbar from "./components/Navbar";
import Payments from "./pages/Payment";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainlayout />} />
    </Routes>
      <Routes>
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/payment" element={<Payments/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
