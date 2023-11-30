import React from "react";
// import  ReactDOM  from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Outlet } from "react-router-dom";
// import About from "./components/About";
// import { createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/> 
      <Footer />
    </div>
  );
};

// 
{/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/about/:id" element={<About/>} />
        </Routes>
      </BrowserRouter> */}


export default AppLayout;
