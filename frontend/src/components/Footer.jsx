import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" mt-20 bg-black w-full flex flex-col justify-between text-white">
      <div className="up pb-20 flex flex-col lg:flex-row justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-20 ">
        <div className="logo flex flex-col gap-5 w-full lg:w-1/4 items-center text-center">
          <img src={assets.logo} alt="Logo" className="h-[100px] w-[100px]" />
          <img src={assets.parishkar} className="w-40" alt="" />
          <p className="text-lg mt-2 text-white max-w-80">
            "Empowering Tomorrow, Today: Innovate, Integrate, Illuminate with
            Pytosoft IT Solution Pvt. Ltd."
          </p>

          <div className="links mt-5 text-white">
            <div className="flex justify-center items-center lg:justify-center gap-4 text-2xl">
              <NavLink to="https://www.instagram.com/parishkar_college/">
                <i className="cursor-pointer p-3 bg-zinc-800 rounded-full  hover:text-[#3E4095] fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink to="https://www.linkedin.com/school/parishkar-college-of-global-excellence-jaipur/posts/?feedView=all">
                <i className="cursor-pointer p-3 bg-zinc-800 rounded-full  hover:text-[#3E4095] fa-brands fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="https://www.youtube.com/channel/UCPFcshFTe3XcIrn8MlW-Q3Q">
                <i className="cursor-pointer p-3 bg-zinc-800 rounded-full  hover:text-[#3E4095] fa-brands fa-youtube"></i>
              </NavLink>
              <NavLink to="https://www.facebook.com/parishkarcollegeofglobleexellence/">
                <i className="cursor-pointer p-3 bg-zinc-800 rounded-full  hover:text-[#3E4095] fa-brands fa-facebook"></i>
              </NavLink>
              <NavLink to="https://twitter.com/ParishkarW">
                <i className="cursor-pointer p-3 bg-zinc-800 rounded-full  hover:text-[#3E4095] fa-brands fa-twitter"></i>
              </NavLink>
            </div>
          </div>
        </div>

        <div className=" w-full sm:w-1/4 lg:text-start text-center lg:mx-0 m-auto flex flex-col gap-10 mt-10">
          <h1 className="text-3xl">Quick Links</h1>

          <div className="link flex flex-col gap-8 text-xl text-zinc-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>

        <div className=" w-full sm:w-1/4 sm:items-start items-center sm:text-start lg:text-start text-center lg:mx-0 m-auto flex flex-col gap-10 mt-10">
          <h1 className="text-3xl text-nowrap">College Locations</h1>

          <div className="flex gap-5">
            <i className=" text-3xl text-zinc-500 fa-solid fa-location-dot"></i>
            <div className="link flex flex-col gap-4 text-xl text-zinc-600">
              Near Metro Mas Hospital Shipra Path, Mansarovar, Jaipur, (302021)
              Rajasthan
              <div className="flex gap-3 items-center ">
                <i className="fa-solid fa-envelope"></i>
                <p>info@parishkar.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="down w-full py-7 bg-gray-800 items-center lg:text-start text-center text-gray-300 font-semibold text-lg flex justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <p className="lg:mx-0 mx-auto">
          &copy; Copyright 2024 by Parishkar College of Global
          Excellence(Autonomous)
        </p>
        <div className="links text-start lg:flex gap-5 items-center hidden">
          <NavLink to="/" className="hover:underline transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline transition">
            About Us
          </NavLink>
          <NavLink
            to="/register"
            className="bg-blue-500 p-1 px-2  rounded-md hover:bg-blue-700"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
