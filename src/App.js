import React from "react";
import './index.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

//1.imported my routes into app.js which is my main page
//3.need to import route/routes from react dom because they are not defined
import { Route, Routes } from "react-router-dom";
//4. Now my "home" from Home.js shows up




function App() {
  return (
    <div>
      <Routes>
        {/* 2. I want clickable sections so  I need to designate routes with a path */}
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
