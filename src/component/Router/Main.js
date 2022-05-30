import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="contact"
            element={<Contact data={[{ age: 27, name: "hfghgfhgf" }]} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
