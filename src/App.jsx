import logo from "./logo.svg";
import "./App.css";
import LogPg from "./components/login page/login.jsx";
import SigPage from "./components/signup page/signup.jsx";
import HomePg from "./components/home page/home.jsx";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigate from "./components/firstscreennavigation/navigate.jsx";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setcurrentUser] = useState(
    localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />}></Route>
        <Route path="/login" element={<LogPg />}></Route>
        <Route path="/signup" element={<SigPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
