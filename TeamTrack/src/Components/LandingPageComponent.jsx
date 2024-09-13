import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";

export default function LandingPageComponent({ showlogin }) {
  return (
    <div className="bg-[url(./assets/background.png)]">
      <NavBar />
      <div className="flex justify-center min-h-screen w-screen overflow-hidden bg-custom-gradient text-white">
        {/* main content */}
        <div className="flex flex-col text-center items-center">
          <h1 className="font-extrabold font-righteous text-6xl mt-[15vh] mb-9">
            TeamTrack
          </h1>
          <p className="font-extrabold italic mb-16">
            A Collaborative To-Do List
          </p>
          <Link
            className="flex-none w-[125px] bg-[#D65A31] rounded-2xl py-[4px] font-sans text-s hover:bg-cyan-50 hover:text-[#D65A31] hover:font-bold transition-all duration-300 ease-in-out"
            to={"/Login-Page"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
