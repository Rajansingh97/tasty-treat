import React from "react";
import Dishes from "./components/Dishes";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './css/Check.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import FeedbackForm from "./components/Feedback";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <div className="container">
  
        <Routes>
          <Route exact path="/dishes" element={<Dishes/>} />
          <Route exact path="/singup" element={<Signup/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Feedback" element={<FeedbackForm/>} />
          

          
          <Route path="/" element={<Navigate replace to="/dishes" />} />
        </Routes>
      </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
