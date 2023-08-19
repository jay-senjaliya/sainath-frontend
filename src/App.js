import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import About from "./components/About";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
// import Navbar from "./components/Navbar";
import TourState from "./context/tours/TourState";
import TourDetail from "./components/TourDetail";
// import { useContext, useEffect, useState } from "react";
// import TourContext from "./context/tours/TourContext";
// import Whatsapp from "./components/Whatsapp";
import InquiryForm from "./components/InquiryForm";
import InquiryState from "./context/inquiry/InquiryState";
import Cab from "./pages/Cab";
import TourListPage from "./pages/TourListPage";

function App() {
  return (
    <>
      <TourState>
        <InquiryState>
          <Router>
            <div id="main">
              <div className="d-block">
                <Nav />
              </div>
              <div className="main" style={{ marginTop: "72px" }}>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route
                    path="/domestic-tour"
                    element={<TourListPage name="Domestic Tour" />}
                  ></Route>
                  <Route
                    path="/pilgrimage-tour"
                    element={<TourListPage name="Pilgrimage Tour" />}
                  ></Route>
                  <Route
                    path="/international-tour"
                    element={<TourListPage name="International Tour" />}
                  ></Route>
                  <Route
                    path="/gujarat-tour"
                    element={<TourListPage name="Gujarat Tour" />}
                  ></Route>
                  <Route
                    path="/group-tour"
                    element={<TourListPage name="Group Tour" />}
                  ></Route>
                  <Route path="/contactus" element={<ContactUs />}></Route>
                  <Route path="/cab" element={<Cab />}></Route>
                  {/* <Route path="domestic-tour/tour-detail" element={<TourDetail />}></Route> */}
                  <Route
                    path="tour-detail/:tourName"
                    element={<TourDetail />}
                  ></Route>
                </Routes>
              </div>
              <div>
                <Footer />
              </div>
              <InquiryForm />
              {/* <Whatsapp /> */}
            </div>
          </Router>
        </InquiryState>
      </TourState>
    </>
  );
}

export default App;
