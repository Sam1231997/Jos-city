



import "./index.css"
import React from "react";
// import {data} from "./Data"
// import {useState, useEffect} from 'react'
// import Header from "./Header";
// import Footer from "./Footer";
// import Search from "./Header";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NowIJ from "./NowIJ";
import Accomodation from "./Accomodation";
import Restaurant from "./Restaurant";
import Shopping from "./Shopping";
import Attraction from "./Attraction";
import Header from "./Header";
import Landing from "./Landing";
import Seeall from "./Seeall";
import Details from "./detail";
import Upcoming from "./Upcoming";
import Hospital from "./Hospital";
import Appartment from "./Appartment";

import Details2 from "./details2";
import Details3 from "./details3";
// import ImageSlider from "./ImageSlider";
import Page from "./Page";
import Footer from "./Footer";
// import Header2 from "../Header2";
// import Nav from "./Nav";





const App = () => {
  return(
   
   <BrowserRouter>
     <Header/> 

   <Routes> 
   
     <Route path="/" element={<Landing/>}/>
     <Route path="/see" element ={<Seeall/>}/>
    <Route path="/nowij" element={<NowIJ />} />
    <Route path="/shopping" element={<Shopping/>} />
    <Route path="/attraction" element={<Attraction/>} />
    <Route path="/accomodation" element={<Accomodation/>} />
    <Route path="/restaurant" element={<Restaurant/>} /> 
    <Route path="/detail1" element ={<Details/>}/>
    <Route path="/upcoming" element ={<Upcoming/>}/>
    <Route path="/hospital" element ={<Hospital/>}/>
    <Route path="/appartment" element ={<Appartment/>}/>
    <Route path="/details2" element ={<Details2/>} />
    <Route path="/details3" element ={<Details3/>}/>
    

   </Routes> 

</BrowserRouter> 
  )
  
}

export default App;
