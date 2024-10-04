import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Congrats = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={assets.congrats} className=" h-full w-full object-cover absolute top-0 left-0 brightness-50" alt="" />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md z-10  w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          You have successfully registered for the hackathon! 🎉
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our team will contact you soon with more details. We wish you the best
          of luck in the competition and for all your future endeavors!
        </p>
        <button
          onClick={handleHomeClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Congrats;
