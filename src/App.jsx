import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ShowCase from "./pages/Showcase";


import Footer from "./components/Footer";

import DetailsPage from "./pages/DetailsPage.jsx";
import ReserveDomainPage from "./pages/PaymentPage";
import Visibility from "./pages/Visiblity";
import ThankYou from "./pages/SubmitPage";
// import Community from "./pages/Community";
import Accountability from "./pages/Accountability";
import FilingCompliance from "./pages/FilingCompliance";
import PaymentPage from "./pages/PaymentPage";




import Navbar from "./components/Navbar";
import MainLayout from "./layouts/Mainlayout";
import DomainSection from "./components/DomianSection.jsx";


function App() {
  return (
    <BrowserRouter>

  <div className="w-full fixed absolute top-5 left-0 z-50">
    <Navbar />
  </div>


  <div className="pt-0">
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/showcase" element={<ShowCase />} />
      <Route path="/showcase/:slug" element={<DetailsPage />} />
      <Route path="/showcase/:slug/payment" element={<ReserveDomainPage />} />
      <Route path="/showcase/:slug/payment/success" element={<ThankYou />} />
      

          {/* <Route path="/community" element={<Community />} /> */}
          <Route path="/accountability" element={<Accountability />} />
          <Route path="/compliance" element={<FilingCompliance />} />
          <Route path="/visibility" element={<Visibility />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/domain" element={<DomainSection/>} />

    </Routes>
  </div>

  <Footer />
</BrowserRouter>

  );
}

export default App;
