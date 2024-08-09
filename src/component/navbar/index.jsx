import React from "react";
import attendence_marker from "./attendence_marker.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="w-10 mb-4 sm:mb-0">
          <img className="rounded-3xl" src={attendence_marker} alt="Attendance Marker" />
        </div>
        <div className="flex gap-2  space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="text-white mt-2 sm:mt-0 hover:text-slate-300">
            Home
          </Link>
          <Link to="/signin" className="text-white hover:text-gray-200">
            Sign In
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-200">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
