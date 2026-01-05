import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import Mainlayout from "./layouts/Mainlayout";
import ShowCase from "./pages/Showcase";

import Navbar from "./components/Navbar";
import Payments from "./pages/Payment";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import FilingCompliance from "./pages/FilingCompliance";
import Visibility from "./pages/Visiblity";
import Accountability from "./pages/Accountability";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Mainlayout />} />
    </Routes>
      <Routes>
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/payment" element={<Payments/>}/>
        <Route path="/compliance" element={<FilingCompliance/>} />
        <Route path="/visibility" element={<Visibility/>} />
        <Route path="/accountability" element={<Accountability/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
