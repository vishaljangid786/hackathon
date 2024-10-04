
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const registerRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    email: "",
    whatsapp: "",
    collegeName: "",
    githubAccount: "",
    field: "",
    TeamMembers: [],
    year: "",
  });

  useEffect(() => {
    gsap.to(registerRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "TeamMembers") {
      setFormData({ ...formData, [name]: value.split(',') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Form submitted successfully', {
          position: "bottom-right",
          autoClose: 3000,
        });
        setFormData({
          teamName: "",
          teamLeader: "",
          email: "",
          whatsapp: "",
          collegeName: "",
          TeamMembers: [],
          githubAccount: "",
          field: "",
          year: "", 
        });
        setTimeout(() => {
          navigate('/payment');
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Try again after some time', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div
      ref={registerRef}
      className="opacity-0 px-4 mt-10 flex flex-col sm:flex-row md:px-[5vw] lg:px-[1vw] gap-14"
    >
      <ToastContainer />

      <div className="hidden lg:flex w-[30vw]">
        <img
          src={assets.registration_img}
          className="w-full h-full object-cover rounded-3xl"
          alt="Registration"
        />
      </div>

      <div className="right w-full lg:w-[60%]  border-2 p-5 rounded-xl">
        <p className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-semibold leading-tight">
          Parishkar College of Global Excellence
          <span className="block sm:inline">(Autonomous College)</span>
        </p>
        <h1 className="text-lg sm:text-xl text-gray-400 mt-2">
          Welcome to Hackathon Registration
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">Team Name:</h1>
            <input
              required
              type="text"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700  w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Enter Team Name"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">
              Team Leader's Name:
            </h1>
            <input
              required
              type="text"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Enter Leader's Name"
              name="teamLeader"
              value={formData.teamLeader}
              onChange={handleChange}
            />
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">Email:</h1>
            <input
              required
              type="email"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">Whatsapp Number:</h1>
            <input
              required
              type="tel"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Enter Your Number"
              pattern="[0-9]{10}"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">College Name:</h1>
            <input
              required
              type="text"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Parishkar College of Global Excellence(Autonomous College)"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">
              Team Members Name:
            </h1>
            <input
              type="text"
              className=" text-base sm:text-lg  text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="Min 2 & Max 4 (Comma separated)"
              name="TeamMembers"
              value={formData.TeamMembers.join(",")}
              onChange={handleChange}
            />
          </div>
          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">
              Leader's Github Account:
            </h1>
            <input
              required
              type="url"
              className=" text-base sm:text-lg text-[#000] placeholder:text-zinc-700 w-full px-2 py-1 rounded-lg outline-none"
              placeholder="https://github.com/test/test-repo"
              name="githubAccount"
              value={formData.githubAccount}
              onChange={handleChange}
            />
          </div>

          <div className="Year flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">Year:</h1>
            <select
              required
              name="year" // यहां 'field' की जगह 'year' होना चाहिए
              className=" text-base sm:text-lg text-zinc-800 w-full px-2 py-1 rounded-lg outline-none"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Choose Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <div className="field flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl text-[#fff]">
              Choose Your Field:
            </h1>
            <select
              required
              name="field"
              className=" text-base sm:text-lg text-zinc-800 w-full px-2 py-1 rounded-lg outline-none"
              value={formData.field}
              onChange={handleChange}
            >
              <option value="">Choose Field</option>
              <option value="wd">Web Design</option>
              <option value="cd">Content Creation</option>
              <option value="ux">UX Design</option>
              <option value="st">Strategy & Consulting</option>
              <option value="ur">User Research</option>
            </select>
          </div>

          <button
            className="w-full py-2 rounded-xl text-lg sm:text-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
            type="submit"
          >
            Submit Here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
