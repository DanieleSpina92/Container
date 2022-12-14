import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Setup from "./components/Setup";
import Admin from "./components/Admin";
import Mytask from "./components/Mytask";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";



function App() {

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mytask" element={<Mytask />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
