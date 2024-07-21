



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
import Header2 from "./Header";
import Landing from "./Landing";
import Seeall from "./Seeall";





const App = () => {
  return(
    // <Header/>
    <Router>
    <Header2/>

  <Routes>
    
    <Route path="/" element={<Landing />}/>
    <Route path="/see" element ={<Seeall/>}/>
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
