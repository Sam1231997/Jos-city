



import "./index.css"
import React from "react";
// import {data} from "./Data"
// import {useState, useEffect} from 'react'
// import Header from "./Header";
// import Footer from "./Footer";
// import Search from "./Header";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NowIJ from "./NowIJ";
import Accomodation from "./Accomodation";
import Restaurant from "./Restaurant";
import Shopping from "./Shopping";
import Attraction from "./Attraction";
import Header from "./Header";





const App = () => {
  return(
    <Router>
      <Header/>
  <Routes>
    <Route path="/nowij" element={<NowIJ />} />
    <Route path="/shopping" element={<Shopping/>} />
    <Route path="/attraction" element={<Attraction/>} />
    <Route path="/accomodation" element={<Accomodation/>} />
    <Route path="/restaurant" element={<Restaurant/>} />
  </Routes>
</Router>
  )
  
}

export default App;
