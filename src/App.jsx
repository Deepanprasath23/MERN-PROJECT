import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;