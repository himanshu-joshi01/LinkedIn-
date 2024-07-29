// import React from 'react';

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Users from "./components/Users";
import ShowUser from "./components/ShowUser";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { Routecontext } from "./utils/Context";

function App() {

 
  const loc=useLocation();
  const [route,setRoute]= useContext(Routecontext)
  const setTitle=()=>{
    const path=loc.pathname.split("/")[1];
    (path==="")? setRoute("Feeds"):setRoute(path);
    document.title=route;

  }
  
  useEffect(() => {
    setTitle();
  },)



  return (
  
   
    <>
      
      <div className="relative bg-zinc-200 py-4">
      <Navbar />
        <div className="mx-[10%] pt-16 h-full w-[80%]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cards" element={<Cards />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/users/:id" element={<ShowUser />}></Route>
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
