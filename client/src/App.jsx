import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { CampaignDetails, CreateCompaign, Home, Profile } from "./pages";
export default function App() {
  return (
    <h1 className="relative text-white sm:-8 p-4 bg-[black] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </h1>
  );
}
