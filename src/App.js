import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./webpageTask/Footer";
import NavBar from "./webpageTask/NavBar";
import Task from "./webpageTask/Task";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Task />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
