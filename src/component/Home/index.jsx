import React from 'react';
import img1 from '../../assets/img1.jpeg';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50" />
   
      <div className="bg-slate-400 min-h-screen flex items-center justify-center overflow-hidden"> {/* Add padding-top to avoid content under Navbar */}
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              alt="Attendance App"
              className="h-[25vh] md:h-[50vh] lg:h-[60vh] rounded-3xl shadow-md transition duration-200 border-8 border-slate-800 border-double transform hover:scale-105" // Remove hover:scale-105 if you don't want the effect
              src={img1}
            />
          </div>

          <div className="w-full md:w-1/2  flex flex-col justify-center items-center px-auto lg:px-14">
            <h1 className="text-4xl font-bold text-gray-800  text-center ">
              Welcome to Attendance App
            </h1>
            <br />
            <p className="text-gray-600 mb-8 text-center text-lg md:text-center">
              Easily track attendance with just a few clicks. Streamline your workflow and make attendance management effortless.
            </p>
            <Link to="/signup" className="px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-900 mb">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
