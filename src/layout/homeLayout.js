import { useState, useEffect, React } from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer"
import { Outlet } from "react-router";
// import  BIRDS  from 'vanta/dist/vanta.birds.min';
export default function HomeLayout(props) {


  return (
  <div>
    <TopNavbar/>
    <Outlet />
    <Footer/>
    
  </div>
       

      
          
          
     
   
  );
}
