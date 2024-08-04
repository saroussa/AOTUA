import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import HomeLayout from "./layout/homeLayout.js";
import Contact from "./screens/Contact.jsx";
import Cadre from "./screens/Cadre.jsx";
import Projets from "./screens/Projets.js";
import Events from "./screens/Events.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cadre" element={<Cadre />} />
        <Route path="/reseaux" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
