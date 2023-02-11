import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, TaskTracker, TaskBoard, ALICE, Profile, Login } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-tracker" element={<TaskTracker />} />
          <Route path="/task-board" element={<TaskBoard />} />
          <Route path="/alice" element={<ALICE />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
