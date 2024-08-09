import React from "react";
import Home from "../component/Home";
import Navbar from "../component/Navbar";
import { Routes, Route } from "react-router-dom";
import Tasks from "../component/Tasks";
import Friends from "../component/Friends";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>{" "}
      <Navbar />
    </>
  );
};

export default Routers;
